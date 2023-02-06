import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { Wallet } from 'src/interfaces/wallet.interface';
export declare class WalletsService {
    private walletModel;
    private userModel;
    constructor(walletModel: Model<Wallet>, userModel: Model<User>);
    createWallet(wallet: Wallet, userid: string): Promise<Wallet>;
    listWalletsByUser(userid: string): Promise<Wallet[]>;
}
