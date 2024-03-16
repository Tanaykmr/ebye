const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const orgRouter = require("./routes/org");
const userRouter = require("./routes/user");
const catchAllRouter = require("./routes/catchAll")



// import express from 'express'
// import mongoose from 'mongoose';
// import cors from 'cors';
// import orgRouter from "./routes/org";
// import userRouter from "./routes/user";
// import catchAllRouter from "./routes/catchAll"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/org", orgRouter)
app.use("/user", userRouter)
app.get("*", catchAllRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(
  // <insert mongodb link here>
  "mongodb+srv://ClusterMaster1:JpUySmI2KmnbHSoZdelulu@cluster1.gpi837f.mongodb.net/ebyeDB"
  );
app.listen(3000, () => console.log('Server running on port http://localhost:3000'));
