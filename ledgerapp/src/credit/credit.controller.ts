import { Body, Controller, Header, Param, Post } from '@nestjs/common';
import { CreateCreditDto } from 'src/dto/create-credit.dto';
import { CreditService } from './credit.service';

@Controller('credit')
export class CreditController {
    constructor(private readonly service: CreditService){}


    //create a credit
    
    @Post(':walletid')
    @Header('Content-Type', 'application/json')


    async createcredit(@Body() createCreditDto: CreateCreditDto, @Param('walletid') walletid: string) {
        return await this.service.createcredit(createCreditDto, walletid)
    }
}


