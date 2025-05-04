const mongoose = require("mongoose");
const { DB_Name } = require("./utils");
require("dotenv").config();

const connectDB = async () => {
    try{
        // mongoose returns the object
        let connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log("MongoDb Connected");
        console.log("Connection Host:", connectioninstance.connection.host);
        console.log("Connection Name:", mongoose.connection.name);
    }
    catch(e) {
        console.log("Mongodb Connection Failed ->" , e);
        process.exit(1);
    }
}

module.exports = {connectDB};