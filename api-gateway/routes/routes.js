const express = require("express");
const router = express.Router();
const axios = require("axios");

//Auth-Service
router.route("/login").post(async (req, res) => {
    const response = await axios.post("http://localhost:5001/api/auth/login", req.body);
    return res.status(response.status).json(response.data);
}); 

module.exports = router;