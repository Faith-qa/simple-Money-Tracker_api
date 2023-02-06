import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Credit } from 'src/interfaces/credit.interface';
import { User } from 'src/interfaces/user.interface';
import { Wallet } from 'src/interfaces/wallet.interface';

@Injectable()
export class CreditService {
    constructor(
        @InjectModel('Credit') private creditModel: Model<Credit>,
        @InjectModel('Wallet') private walletModel: Model<Wallet>,
        @InjectModel('User') private userModel: Model<User>
        
    ){}

    //create credit and update the wallet and user documents

    async createcredit(credit: Credit, walletid: string): Promise<Credit>{
        const wallet = await this.walletModel.findById({_id: walletid});
        if (!wallet) {
            throw new HttpException(`wallet id ${walletid} does not exist`, HttpStatus.NOT_FOUND)
        }

        try {
            const newCredit = new this.creditModel({
                wallet: wallet._id,
                ...credit
            });

            const savedCredit = await newCredit.save()


            //update credit amount in wallet

           wallet.Credit.push({creditid: savedCredit._id, creditAmount: -savedCredit.credit_amount }) 
           wallet.Total -= savedCredit.credit_amount
           await wallet.save()

          //retrieve the user document
          const user = await this.userModel.findById({_id: wallet.user});
            if (!user) {
                throw new HttpException(`User with id ${wallet.user} not found`, HttpStatus.NOT_FOUND)
            }
        
        //find the wallet in the user wallet array
            const userWallet = await user.wallets.find(w => w.walletId.toString() === wallet._id.toString());
            if (!userWallet) {
                throw new HttpException(`Wallet with id ${wallet._id} not found in user's wallets`, HttpStatus.NOT_FOUND)
            }
        //update the wallet total and the currrent account balance

            userWallet.walletTotal = wallet.Total;


            user.Accountbalance += userWallet.walletTotal;

            await user.save()

           return savedCredit;





        } catch(err){
            console.log(err)
        }
    }
}