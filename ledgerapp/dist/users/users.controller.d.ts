import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/interfaces/user.interface';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
