require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    try{
        let token = req.headers["authorization"].replace("Bearer ", "") || "";

        if(!token) return res.status(400).json("Invalid Request");

        await jwt.verify(token, process.env.JWT_Secret, (err, decode) => {
            if(err) {
                console.log(err);
                return;
            }

            if(decode){
                req.UserDetails = decode;
            }
        });

        if(req.UserDetails.role != "admin") return res.status(401).json("You Are not authorized to proceed");

        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json("Error");
    }
}


module.exports = {authMiddleware};