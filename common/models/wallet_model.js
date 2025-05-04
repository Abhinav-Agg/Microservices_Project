const {Schema, Mongoose, default: mongoose} = require("mongoose");

const walletSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        balance : {
            type : Number,
            required : true,
            trim : true
        },
        hold : {
            type : Number,
            required : true,
            trim : true
        },
        minLimit : {
            type : Number,
            required : true,
            trim : true
        },
        maxLimit : {
            type : Number,
            required : true,
            trim : true
        },
        lean : {
            type : Number,
            required : true,
            trim : true
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model("Wallet", walletSchema);