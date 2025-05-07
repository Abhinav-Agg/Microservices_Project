const { default: mongoose } = require("mongoose");
const { asyncHandler } = require("../../common/AsyncHandlerWrapper");
const Users = require("../../common/models/users_model");
const {Wallets, walletSchema} = require("../../common/models/wallet_model");
const { hashPassword} = require("../../common/utils");

const createUser = asyncHandler(async(req, res) => {
    let {fullName, UserEmail, UserPassword, UserId, MobileNumber} = req.body;

    // Validate the fields.
    if(!fullName || !UserEmail || !UserPassword || !UserId || !MobileNumber) return res.status(400).json({"ErrorMsg" : "Fields are missing"});

    // Check for Duplicacy.
    let existingUser = await Users.findOne({ $or: [{ UserId }, { email: UserEmail }] });

    if(existingUser) {
        return res.status(409).send("User is Exists");
    }

    //Hashed Password
    let pass = await hashPassword(UserPassword);

    // Add the entry
    let userDetails = await Users.create({
        fullname: fullName,
        email: UserEmail,
        Password: pass,
        Mobile: MobileNumber,
        UserId: UserId
    });

    let userResponse = userDetails.toObject();  //mongoose returns json and we need plain object because in same response we added auto created wallet details.

    // After usercreated will use the UserId for creation of separate db on the basis of UserId for Auto wallet creation.
    const userDBName = `user_${UserId}`;
    const userDBURI = `${process.env.MONGODB_URI}/${userDBName}`;

    try {
        // Dynamically connect to the user's specific database
        const userDbConnection = await mongoose.createConnection(userDBURI);

        // Wallets model uses the global DB — not suitable for per-user DB.
        // Use walletSchema with userDbConnection to write to the user's DB.
        const Wallet = userDbConnection.model("Wallet", walletSchema);

        let autocreatedWalletDetails =  await Wallet.create({
            userId: UserId,
            balance: 10000,
            hold: 100,
            minLimit: 50,
            maxLimit: 5000,
            lean: 200
        });

        userResponse["AutoWalletDetails"] = autocreatedWalletDetails;

    } catch (error) {
        res.status(500).json({ "ErrorMsg": "Error while creating user DB" });
    }
    
    return res.status(200).json(userResponse);
});

module.exports = {createUser};