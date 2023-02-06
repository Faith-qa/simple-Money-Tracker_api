import { ObjectId } from "mongoose";

export interface User {
    name: {firstname: string, lastname: string};
    email: string;
    wallets?: [{walletId: ObjectId, walletName: string, walletTotal:number }]
    Accountbalance?: number
}
