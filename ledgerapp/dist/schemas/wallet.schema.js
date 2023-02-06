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
    Credit: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Credit' }],
    Total: Number,
    created_date: { type: Date, default: Date.now() },
}, {
    timestamps: true,
});
//# sourceMappingURL=wallet.schema.js.map