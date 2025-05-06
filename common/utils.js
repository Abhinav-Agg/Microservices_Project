const bcrypt = require("bcryptjs");

const DB_Name = "MicroserviceApp";

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    return hashedPass;
}

const verifyPassword = async (userEnteredPass, UserPassword) => {
    const passwordVerified = await bcrypt.compare(userEnteredPass, UserPassword);
    return passwordVerified;
}


module.exports = {DB_Name, hashPassword};