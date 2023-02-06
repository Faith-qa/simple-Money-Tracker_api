import { Model } from 'mongoose';
import { Debit } from 'src/interfaces/debit.interface';
import { User } from 'src/interfaces/user.interface';
import { Wallet } from 'src/interfaces/wallet.interface';
export declare class DebitService {
    private debitModel;
    private walletModel;
    private userModel;
    constructor(debitModel: Model<Debit>, walletModel: Model<Wallet>, userModel: Model<User>);
    createdDebit(debit: Debit, walletid: string): Promise<Debit>;
}
