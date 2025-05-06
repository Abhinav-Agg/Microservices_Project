const mongoose = require("mongoose");
const { DB_Name } = require("./utils");
require("dotenv").config();

const mongoURI = `${process.env.MONGODB_URI}/${DB_Name}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try{
        // mongoose returns the object
        const conn = await mongoose.connect(mongoURI);

        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(e) {
        console.log("Mongodb Connection Failed ->" , e);
        process.exit(1);
    }
}

module.exports = {connectDB};