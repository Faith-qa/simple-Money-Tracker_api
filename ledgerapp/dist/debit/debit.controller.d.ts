import { CreateDebitDto } from 'src/dto/create-debit.dto';
import { DebitService } from './debit.service';
export declare class DebitController {
    private readonly service;
    constructor(service: DebitService);
    createcredit(createDebitDto: CreateDebitDto, walletid: string): Promise<import("../interfaces/debit.interface").Debit>;
}
