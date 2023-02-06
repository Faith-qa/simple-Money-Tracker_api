import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CreateWalletDto } from 'src/dto/create-wallet.dto';
import { Wallet } from 'src/interfaces/wallet.interface';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
    constructor( private readonly service: WalletsService){}

    // create a wallet
    @Post(':userid')
    async create(@Body() createWalletDto: CreateWalletDto, @Param('userid') userid: string): Promise<Wallet> {
        //console.log ("this is the wallet name",  createWalletDto.walletname)
        
        return await this.service.createWallet(createWalletDto, userid)
    }


}
