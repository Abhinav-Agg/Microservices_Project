const express = require("express");
const router = express.Router();
const axios = require("axios");
const { asyncHandler } = require("../../common/AsyncHandlerWrapper");

//Auth-Service
router.route("/login").post(asyncHandler(async (req, res) => {
    if(req.baseUrl.includes("/api/auth")){
        // With Axios if we send an error msg that goes into catch that's why getting wrong error msg.
        const response = await axios.post("http://localhost:5001/api/auth/login", req.body);
        return res.status(response.status).json(response.data);
    }
}));

// User-Service
router.route("/create").post(asyncHandler(async (req, res) => {
    if (req.baseUrl.includes("/api/users")) {
        const response = await axios.post("http://localhost:5002/api/users/create", req.body);
        return res.status(response.status).json(response.data);
    }
}));

module.exports = router;