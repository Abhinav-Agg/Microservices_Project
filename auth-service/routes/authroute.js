const express = require("express");
const { login } = require("../controllers/authcontroller");
const router = express.Router();

router.route("/login").post(login);

module.exports = router;