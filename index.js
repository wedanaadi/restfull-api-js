const express = require("express");
const app = express();
const env = require("dotenv");
const cookieParser = require("cookie-parser");
env.config();
process.env.TZ;
const port = process.env.PORT || 5000;
const employeRoutes = require("./src/routes/employeRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use("/api/v1/employe", employeRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => console.log(`running on port ${port}`));
