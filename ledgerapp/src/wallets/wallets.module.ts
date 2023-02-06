import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { WalletSchema } from 'src/schemas/wallet.schema';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Wallet',schema: WalletSchema }, {name: 'User', schema: UserSchema}])],
  controllers: [WalletsController],
  providers: [WalletsService]
})
export class WalletsModule {}
