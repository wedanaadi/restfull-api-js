const express = require("express");
const app = express();
const env = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
env.config();
process.env.TZ;
const port = process.env.PORT || 5000;
const employeRoutes = require("./src/routes/employeRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:3000",
  })
);
app.use("/api/v1/employe", employeRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => console.log(`running on port ${port}`));
