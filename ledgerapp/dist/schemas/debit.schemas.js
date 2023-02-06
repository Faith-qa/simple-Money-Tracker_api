"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitSchema = void 0;
const mongoose = require("mongoose");
exports.DebitSchema = new mongoose.Schema({
    wallet: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet', required: true },
    debit_amount: { type: Number, required: true },
    debit_summary: { type: String, required: true }
}, {
    timestamps: true
});
//# sourceMappingURL=debit.schemas.js.map