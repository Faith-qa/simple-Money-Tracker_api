import * as mongoose from 'mongoose';
export declare const WalletSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    walletname: string;
    Debit: mongoose.Types.ObjectId[];
    Credit: mongoose.Types.ObjectId[];
    created_date: Date;
    Total?: number;
}>;
