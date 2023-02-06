import * as mongoose from 'mongoose';

export const CreditSchema = new mongoose.Schema({
    wallet: {type: mongoose.Schema.Types.ObjectId, 
        ref: 'Wallet', required: true},
    credit_amount:{type: Number, required: true},
    credit_summary: {type: String, required: true}

},
{
    timestamps: true
}
)