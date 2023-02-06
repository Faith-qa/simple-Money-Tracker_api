"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletSchema = void 0;
const mongoose = require("mongoose");
exports.WalletSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    walletname: { type: String, required: true, unique: true },
    Debit: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Debit' }],
    Credit: [
        {
            creditid: { type: mongoose.Schema.Types.ObjectId, ref: 'Credit' },
            creditAmount: { type: Number }
        }
    ],
    Total: { type: Number, default: 0 },
}, {
    timestamps: true,
});
//# sourceMappingURL=wallet.schema.js.map