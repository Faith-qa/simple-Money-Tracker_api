import { Model } from 'mongoose';
import { Credit } from 'src/interfaces/credit.interface';
import { User } from 'src/interfaces/user.interface';
import { Wallet } from 'src/interfaces/wallet.interface';
export declare class CreditService {
    private creditModel;
    private walletModel;
    private userModel;
    constructor(creditModel: Model<Credit>, walletModel: Model<Wallet>, userModel: Model<User>);
    createcredit(credit: Credit, walletid: string): Promise<Credit>;
}
