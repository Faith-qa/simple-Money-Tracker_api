import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/interfaces/user.interface';



@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService ){};

    @Post()
    //signup user
    async create(@Body() createUserDto: CreateUserDto){
        return await this.service.create(createUserDto);
    }

    @Get()
    //get all users
    async getAll(){
        return await this.service.findAll();
    }

    @Get(':userid')
    //get a user profile
    async getProfile(@Param('userid') userid:string){
        return await this.service.findOne(userid)
    }


    
}