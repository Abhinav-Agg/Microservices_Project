const {Mongoose, Schema, default: mongoose} = require("mongoose");

const userSchema = new Schema(
    {
        fullname : {
            type: String,
            required : true,
            trim : true
        },
        email : {
            type: String,
            required : true,
            unique : true,
            lowercase: true,
            trim : true,
            index : true 
        },
        Password : {
            type: String,
            required : [true, "Password is required"],
            trim : true,
        },
        Mobile : {
            type : Number,
            required : true,
            unique : true,
            trim : true,
            index : true
        },
        UserId : {
            type : String,
            required : true,
            unique : true,
            trim : true,
            index : true
        }
    },
    {
        timestamps : true
    }
);

const Users = mongoose.model("User", userSchema);

module.exports = Users;