import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
}
