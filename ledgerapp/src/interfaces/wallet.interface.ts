import { ObjectId } from "mongoose";

export interface Wallet {
    user?: ObjectId;
    walletname: string;
    credit?: [];
    debit?: [];
    total?: number;
}