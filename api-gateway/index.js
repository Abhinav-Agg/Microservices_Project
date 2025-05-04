require("dotenv").config({ path: process.env.DOTENV_CONFIG_PATH });
const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("../common/db");
const { createProxyMiddleware } = require("http-proxy-middleware");
const authServiceRoute = require("./routes/routes");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Will call other service with their separate routes.
app.use("/api/auth", authServiceRoute);

// app.use("/api/auth", createProxyMiddleware({
//     target : "http://localhost:5001",
//     changeOrigin : true
//     // pathRewrite : {
//     //     "^/api/auth" : ""
//     // }
// }));

app.listen(8000, () => {
    console.log("Server is listening at mentioned PORT", 8000);
});
