import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, CreateUserDTO } from 'src/data/user';

@Injectable()
export class AuthService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async addUser(userDTO: CreateUserDTO): Promise<User> {
        try {
            const newUser = new this.userModel(userDTO);
            return await newUser.save();
        } catch (error) {
            return error;
        }
    }

    getText(text: string) {
        return { text };
    }
}
