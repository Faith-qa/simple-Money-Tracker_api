import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    wallets: {
        walletTotal: number;
        walletId?: mongoose.Types.ObjectId;
        walletName?: string;
    }[];
    Accountbalance: number;
    name?: {
        firstname?: string;
        lastname?: string;
    };
}>;
