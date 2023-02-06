import { ObjectId } from "mongoose";
export declare class CreateWalletDto {
    readonly user: ObjectId;
    readonly walletname: string;
    readonly credit?: [];
    readonly debit?: [];
    readonly total: number;
}
