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
        //const uid = new mongoose.Types.ObjectId(userid)
        var user = await this.userModel.findOne({userid});
                

        //console.log('hello', user)
        if (!user) {
            throw new Error(`User with id ${userid} not found`);
        }

        try{
            const newWallet = new this.walletModel({
                user: user._id,
                ...wallet
            });
    
            const savedWallet = await newWallet.save();
    
             // Retrieve the saved wallet from the database
             const completeWallet = await this.walletModel.findById(savedWallet._id);
    
             
            
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
        }catch(err){
            console.log(err);
            throw new HttpException('wallet exists', HttpStatus.BAD_REQUEST)
        }

    }
}
