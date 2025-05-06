require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("../common/db");
const { createProxyMiddleware } = require("http-proxy-middleware");
const serviceRouter = require("./routes/routes");
const { authMiddleware } = require("./middleware/authmiddleware");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Will call other service with their separate routes.
app.use("/api/auth", serviceRouter);
app.use("/api/users", authMiddleware, serviceRouter);


app.listen(process.env.PORT, () => {
    console.log("Server is listening at mentioned PORT", 8000);
});

// app.use("/api/auth", createProxyMiddleware({
//     target : "http://localhost:5001",
//     changeOrigin : true
//     // pathRewrite : {
//     //     "^/api/auth" : ""
//     // }
// }));
