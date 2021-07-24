require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
// routers
const authRoute = require("./routes/auth");

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

// routes
app.use("/api/user", authRoute);
// port configuration
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server Started"));
