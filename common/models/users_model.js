const {Mongoose, Schema, default: mongoose} = require("mongoose");

const userSchema = new Schema(
    {
        fullname : {
            type: String,
            required : true,
            trim : true,
            index : true
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
        }
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model("User", userSchema);