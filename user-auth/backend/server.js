require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// mongoose configuration
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(
  DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) return err;
    console.log("Mongoose Connected");
  }
);

// port configuration
const port = 5000;
app.listen(port, () => console.log("Server Started"));
