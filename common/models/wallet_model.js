const {Schema, default: mongoose} = require("mongoose");

const walletSchema = new Schema(
    {
        userId : {
            type : Schema.Types.String,
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

const Wallets = mongoose.model("Wallet", walletSchema);

module.exports = {Wallets, walletSchema};