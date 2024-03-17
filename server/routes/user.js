const express = require("express");
const { authenticateJwt, USERSECRET } = require("../middleware/auth");
const {  User, Device, SoldDevice } = require("../db/db");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ username, role: "user" }, USERSECRET, {
      expiresIn: "1d",
    });
    res.json({ message: "User created successfully", token });
    console.log({ message: "User created successfully" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("just recieved: ", username, " ", password)
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: "user" }, USERSECRET, {
      expiresIn: "1d",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.get("/devices", authenticateJwt, async (req, res) => {
  const devices = await Device.find({});
  res.json({devices});
});

// this is to view 1 device at a time, /purchase
router.get("/devices/:deviceId", authenticateJwt, async (req, res) => {
  //list out a single  device
  // chante below rhs to solddevice
  const device = await Device.findById(req.params.deviceId);
  if (device) {
    res.json({ device });
  } else {
    res.status(405).json({ message: "Device not found" });
  }
});

// to buy devices, /purchase
router.post("/devices/:deviceId", authenticateJwt, async (req, res) => {
  // purchase a device
  console.log("about to purchase a device");
  const device = await Device.findById(req.params.deviceId);
  console.log("you are about to purchase this device: ", device);
  if (device) {
    const user = await User.findOne({ username: req.user.username });
    console.log("while purchasing the device, the user is: ", user);
    if (user) {
      const alreadyPurchased = user.purchasedDevices.some((purchasedDevices) =>
      purchasedDevices.equals(device._id)
      );
      if (alreadyPurchased) {
        console.log("user has already purchased this device");
        return res
          .status(409)
          .json({ message: "User has already purchased this device" });
      }
      user.purchasedDevices.push(device);
      await user.save();
      res.json({ message: "Device purchased successfully" });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Device not found" });
  }
});


router.get("/purchasedDevices", authenticateJwt, async (req, res) => {
  //list purchased courses
  const user = await User.findOne({ username: req.user.username }).populate(
    "purchasedDevices" //means to list out the "purchasedDevices" of each user
  );
  if (user) {
    res.json({ purchasedDevices: user.purchasedDevices || [] }); //if user.purchasedDevices is empty, return an empty array
  } else {
    res.status(403).json({ message: "User not found" });
  }
});





// to sell devices, /sell
router.post("/selldevice", authenticateJwt, async (req, res) => {
  // sell a device
  console.log("about to sell a device");
  const device = new Device(req.body);
  await device.save();
  res.json({ message: "Device uploaded successfully", deviceId: device.id });
});



// router.delete("/courses/:courseId", authenticateJwt, async (req, res) => {
//   const user = await User.findOne({ username: req.user.username });
//   const courseIdToRemove = req.params.courseId;
//   console.log("while deleting, user is: ", user);
//   if (user) {
//     User.findOneAndUpdate(
//       { _id: user._id },
//       { $pull: { purchasedCourses: courseIdToRemove } },
//       { new: true },).then((response)=>{
//         console.log("updatedUser is: ", response);
//         res.status(200).json({ message: "Deleted!" });
//       }).catch((error)=>{
//         console.log(
//           "encountered an error while deleting the purchase: ",
//           error
//         );
//         res.json(407).json({ message: "Internal server error" });
//       })
//       }
// });

module.exports = router;
