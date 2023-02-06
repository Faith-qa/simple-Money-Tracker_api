import * as mongoose from 'mongoose';
export declare const WalletSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    walletname: string;
    Credit: {
        creditid?: mongoose.Types.ObjectId;
        creditAmount?: number;
    }[];
    Debit: mongoose.Types.ObjectId[];
    Total: number;
}>;
