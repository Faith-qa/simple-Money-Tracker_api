import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DebitSchema } from 'src/schemas/debit.schemas';
import { UserSchema } from 'src/schemas/user.schema';
import { WalletSchema } from 'src/schemas/wallet.schema';
import { DebitController } from './debit.controller';
import { DebitService } from './debit.service';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Debit', schema: DebitSchema}, 
    {name: 'Wallet', schema: WalletSchema},
    {name: 'User', schema: UserSchema}
  ])],
  controllers: [DebitController],
  providers: [DebitService]
})
export class DebitModule {}
