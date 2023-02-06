"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { firstname: String, lastname: String },
    email: { type: String, unique: true, required: true },
    wallets: [{
            walletId: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },
            walletName: { type: String },
            walletTotal: { type: Number, default: 0 }
        }],
    Accountbalance: { type: Number, default: 0 }
}, {
    timestamps: true
});
//# sourceMappingURL=user.schema.js.map