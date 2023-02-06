import * as mongoose from 'mongoose';

export const DebitSchema = new mongoose.Schema({
    wallet: {type: mongoose.Schema.Types.ObjectId, 
        ref: 'Wallet', required: true},
    debit_amount:{type: Number, required: true},
    debit_summary: {type: String, required: true}

},
{
    timestamps: true
}
)