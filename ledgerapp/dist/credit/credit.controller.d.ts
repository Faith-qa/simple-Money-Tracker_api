import { CreateCreditDto } from 'src/dto/create-credit.dto';
import { CreditService } from './credit.service';
export declare class CreditController {
    private readonly service;
    constructor(service: CreditService);
    createcredit(createCreditDto: CreateCreditDto, walletid: string): Promise<import("../interfaces/credit.interface").Credit>;
}
