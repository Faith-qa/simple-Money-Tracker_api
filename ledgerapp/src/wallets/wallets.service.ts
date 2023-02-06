import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { Wallet } from 'src/interfaces/wallet.interface';

@Injectable()
export class WalletsService {
    constructor(
        @InjectModel('Wallet') private walletModel: Model<Wallet>,
        @InjectModel('User') private userModel: Model<User>

    ){};

    // create wallet

    async createWallet( wallet: Wallet, userid: string): Promise<Wallet>{
        //check if the user exists
        //const uid = new mongoose.Types.ObjectId(userid)
        var user = await this.userModel.findOne({userid});
                

        //console.log('hello', user)
        if (!user) {
            throw new Error(`User with id ${userid} not found`);
        }

        //wallet.user = user._id
        console.log(wallet.walletname)
        //check if the wallet exists
        // const exists = await this.walletModel.findOne({walletname:  wallet.walletname})

        // if (exists) {
        //     throw new Error(`a wallet with that the name ${wallet.walletname} exists `)
        // }

        const newWallet = new this.walletModel({
            user: user._id,
            ...wallet
        });

        const savedWallet = await newWallet.save();

         // Retrieve the saved wallet from the database
         const completeWallet = await this.walletModel.findById(savedWallet._id);

         // create updates

        //  const updates = {
        //     walletId: completeWallet._id,
        //     walletName: completeWallet.walletname,
        //  }

        
        // Update the user's wallets array with the new wallet
    const updatedUser = await this.userModel.findOneAndUpdate({_id: userid}, {
        $push: {
            wallets: {
                walletId: savedWallet._id,
                walletName: savedWallet.walletname,
                walletTotal: savedWallet.total
            }
        }
    }, { new: true });

        console.log(updatedUser)
 
         return savedWallet;
    }
}
