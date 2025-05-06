const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
    try{
        let {userLogin, password} = req.body;
    
        if(!userLogin || !password) return res.status(401).json({"ErrrMsg" : "Fields are Empty"});
    
        //const token = ""; // Getting Constant error becuase with const once value is assigned can't be change.
        const jwtsecret = process.env.JWT_Secret;
    
        const jwtOptions = {expiresIn : "1h"};
    
        const jwtPayload = {role : "admin"};
    
        if(userLogin === "admin" && password === "admin123"){
            const token = await jwt.sign(jwtPayload, jwtsecret, jwtOptions);

            //res.setHeader("Authorization" , `Bearer ${token}`);

            return res.status(200).json({
                message: "Successfully Logged In",
                token: `Bearer ${token}`
            });
        }
        
        return res.status(401).json({"ErrorMsg" : "Invalid Credentails"});
        
    }
    catch(err){
        console.log(err);
    }

}

module.exports = {login};