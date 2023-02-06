import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreditSchema } from 'src/schemas/credit.schema';
import { UserSchema } from 'src/schemas/user.schema';
import { WalletSchema } from 'src/schemas/wallet.schema';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';


@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Credit', schema: CreditSchema}, 
    {name: 'Wallet', schema: WalletSchema},
    {name: 'User', schema: UserSchema}
  ])],
  controllers: [CreditController],
  providers: [CreditService]
})
export class CreditModule {}
