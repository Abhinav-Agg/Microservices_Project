const express = require("express");
const { createUser } = require("../controller/user-controller");

const router = express.Router();

router.route("/create").post(createUser);

module.exports = router;