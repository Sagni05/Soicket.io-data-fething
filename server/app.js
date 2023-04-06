const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/userRoute.js");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json()); //body parser

app.use("/api/v1/users/", userRouter);
app.use("/public", express.static("public"));

module.exports = app;
