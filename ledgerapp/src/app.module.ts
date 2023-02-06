import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UserSchema } from 'src/schemas/user.schema';
import { WalletsController } from './wallets/wallets.controller';
import { WalletsModule } from './wallets/wallets.module';
import config from './config/keys'
import { WalletSchema } from './schemas/wallet.schema';
import { WalletsService } from './wallets/wallets.service';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), UsersModule, WalletsModule, MongooseModule.forFeature([{name: 'User', schema: UserSchema}, {name: 'Wallet', schema: WalletSchema}]), WalletsModule],
  controllers: [AppController, UsersController, WalletsController],
  providers: [AppService, UsersService, WalletsService],
})
export class AppModule { }
