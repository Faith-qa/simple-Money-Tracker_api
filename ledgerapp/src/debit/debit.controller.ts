import { Body, Controller, Header, Param, Post } from '@nestjs/common';
import { CreateDebitDto } from 'src/dto/create-debit.dto';
import { DebitService } from './debit.service';

@Controller('debit')
export class DebitController {
    constructor(private readonly service: DebitService){}


    //create a credit
    
    @Post(':walletid')
    @Header('Content-Type', 'application/json')


    async createcredit(@Body() createDebitDto: CreateDebitDto, @Param('walletid') walletid: string) {
        return await this.service.createdDebit(createDebitDto, walletid)
    }

}
