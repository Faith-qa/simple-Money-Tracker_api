import * as mongoose from 'mongoose';
export declare const CreditSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    wallet: mongoose.Types.ObjectId;
    credit_amount: number;
    credit_summary: string;
}>;
