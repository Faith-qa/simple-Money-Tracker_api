import * as mongoose from 'mongoose';
export declare const DebitSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    wallet: mongoose.Types.ObjectId;
    debit_amount: number;
    debit_summary: string;
}>;
