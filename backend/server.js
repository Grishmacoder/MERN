require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const products = require("./routes/productRoutes");
const users = require('./routes/userRoutes');
const path = require('path');

const app = express();
//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port !!!", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });

//logger
app.use(morgan("dev"));

//middleware
app.use(express.json());

//menu-routes
app.use("/api/products", products);

//user-routes
app.use("/api/user", users);


