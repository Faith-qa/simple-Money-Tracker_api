import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
        var user = await this.userModel.findById({_id: userid});
                

        if (!user) {
            throw new HttpException(`user with id ${userid} not found`, HttpStatus.NOT_FOUND )
        }

        // create new wallet, and update the wallet section in the user schema
        try{
            const newWallet = new this.walletModel({
                user: user._id,
                ...wallet
            });
    
            const savedWallet = await newWallet.save();
    
             // Retrieve the saved wallet from the database
    
             
            
            // Update the user's wallets array with the new wallet
            const updatedUser = await this.userModel.findOneAndUpdate({_id: userid}, {
                $push: {
                    wallets: {
                        walletId: savedWallet._id,
                        walletName: savedWallet.walletname,
                        walletTotal: savedWallet.Total
                    }
                }
            }, { new: true });
        
            console.log(updatedUser)
    
            return savedWallet;

        }catch(err){
            console.log(err);
            throw new HttpException('wallet exists', HttpStatus.BAD_REQUEST)
        }

    }

    // list wallets created by a particular user:

    async listWalletsByUser(userid: string): Promise<Wallet[]>{
        return await this.walletModel.find({user: userid})
    }

}
