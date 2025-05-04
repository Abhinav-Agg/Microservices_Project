const mongoose = require("mongoose");

const serviceChargeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
      required: true,
    },
    slab: {
      type: String,
      required: true,
      // Example format: "50_1000_2.5_rupees/1001_5000_5_rupees"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ServiceCharge", serviceChargeSchema);
