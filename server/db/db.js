const mongoose = require("mongoose");
// import mongoose from "mongoose"
// Define mongoose schemas
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  purchasedDevices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Device" }],
});

const orgSchema = new mongoose.Schema({
  username: String,
  password: String,
  soldDevices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Device" }],
});

const deviceSchema = new mongoose.Schema({
  title: String,
  category: String,
  model: String,
  age: Number,
  quantity: Number,
  imageLink: String,
  ownerId: String,
});
const soldDeviceSchema = new mongoose.Schema({
  title: String,
  category: String,
  model: String,
  age: Number,
  quantity: Number,
  imageLink: String,
  ownerId: String,

  price: Number,
  conditiion: String,
});
//TODO: ADD DEVICES TO BE SOLD, WILL HAVE COST TOO
const User = mongoose.model("User", userSchema);
const Org = mongoose.model("Org", orgSchema);
const Device = mongoose.model("Device", deviceSchema);
const SoldDevice = mongoose.model("SoldDevice", soldDeviceSchema);

module.exports = { User, Org, Device, SoldDevice };
