import { Controller, Get, Post, Put, Delete, Body, Param, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/interfaces/user.interface';



@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService ){};

    @Post()
    @Header('Content-Type', 'application/json')
    //signup user
    async create(@Body() createUserDto: CreateUserDto){
        return await this.service.create(createUserDto);
    }

    @Get() 
    @Header('Content-Type', 'application/json')
    //get all users
    async getAll(){
        return await this.service.findAll();
    }

    @Get(':userid')
    @Header('Content-Type', 'application/json')
    //get a user profile
    async getProfile(@Param('userid') userid:string){
        return await this.service.findOne(userid)
    }


    
}