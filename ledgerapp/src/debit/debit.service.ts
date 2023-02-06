import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Debit } from 'src/interfaces/debit.interface';
import { User } from 'src/interfaces/user.interface';
import { Wallet } from 'src/interfaces/wallet.interface';

@Injectable()
export class DebitService {
    constructor(
        @InjectModel('Debit') private debitModel: Model<Debit>,
        @InjectModel('Wallet') private walletModel: Model<Wallet>,
        @InjectModel('User') private userModel: Model<User>
        
    ){}

    //create debit and update the wallet and user documents

    async createdDebit(debit: Debit, walletid: string): Promise<Debit>{
        const wallet = await this.walletModel.findById({_id: walletid});
        if (!wallet) {
            throw new HttpException(`wallet id ${walletid} does not exist`, HttpStatus.NOT_FOUND)
        }

        try {
            const newDebit = new this.debitModel({
                wallet: wallet._id,
                ...debit
            });

            const savedDebit = await newDebit.save()


            //update debit amount in wallet

           wallet.Debit.push({debitid: savedDebit._id, debitAmount: savedDebit.debit_amount }) 
           wallet.Total += savedDebit.debit_amount
        
           await wallet.save()
           console.log('I MADE IT')
           console.log(wallet.Total)


          //retrieve the user document
          const user = await this.userModel.findById({_id: wallet.user});
            if (!user) {
                throw new HttpException(`User with id ${wallet.user} not found`, HttpStatus.NOT_FOUND)
            }
        
        //find the wallet in the user wallet array
            const userWallet = user.wallets.find(w => w.walletId.toString() === wallet._id.toString());
            if (!userWallet) {
                throw new HttpException(`Wallet with id ${wallet._id} not found in user's wallets`, HttpStatus.NOT_FOUND)
            }
        //update the wallet total and the currrent account balance

        userWallet.walletTotal = wallet.Total;

        user.Accountbalance = user.wallets.reduce((sum, w) => sum + w.walletTotal, 0);

            await user.save()

           return savedDebit;





        } catch(err){
            console.log(err)
        }
    }
}
