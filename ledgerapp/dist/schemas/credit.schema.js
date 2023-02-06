"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditSchema = void 0;
const mongoose = require("mongoose");
exports.CreditSchema = new mongoose.Schema({
    wallet: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet', required: true },
    credit_amount: { type: Number, required: true },
    credit_summary: { type: String, required: true }
}, {
    timestamps: true
});
//# sourceMappingURL=credit.schema.js.map