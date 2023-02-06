import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';

//import {User, UserDocument} from './../schemas/user.schema'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private userModel: Model<User>
        ) {}

    //create a user
    async create(user:User): Promise<User>{
        try
        {
            const newUser = new this.userModel(user);
            return await newUser.save()
        }catch(err){
            throw new HttpException('user with that email exists', HttpStatus.BAD_REQUEST)
        }
    }

    //list all user
    async findAll():Promise<User[]> {
        return await this.userModel.find()
    }

    // list one user
    async findOne(email: string): Promise<User> {
        return await this.userModel.findOne({email})
    }

}
