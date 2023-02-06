import { CreateWalletDto } from 'src/dto/create-wallet.dto';
import { Wallet } from 'src/interfaces/wallet.interface';
import { WalletsService } from './wallets.service';
export declare class WalletsController {
    private readonly service;
    constructor(service: WalletsService);
    create(createWalletDto: CreateWalletDto, userid: string): Promise<Wallet>;
}
