import { ObjectId } from "mongoose";
export interface Wallet {
    user?: ObjectId;
    walletname: string;
    Credit?: [{}];
    Debit?: [];
    Total?: number;
}
