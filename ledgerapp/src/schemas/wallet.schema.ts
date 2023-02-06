import * as mongoose from 'mongoose';

export const WalletSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true},

    walletname: {type: String, required: true, unique: true},
    Debit: [{type: mongoose.Schema.Types.ObjectId, ref: 'Debit'}],
    Credit: [{type: mongoose.Schema.Types.ObjectId, ref: 'Credit'}],
    Total: Number,
    created_date: {type: Date, default: Date.now()},

},
{
    timestamps: true,
})