import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { forwardRef, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
    logger: Logger;
    constructor(@InjectModel(User.name)private userModel: Model<User>) {}


    async findOne(email: string): Promise<User>{
        return await this.userModel.findOne({email}).exec();      
    }

    async findAll(): Promise<User[]>{
        return await this.userModel.find().exec();
    }

    async userLogin(userDto: UserDto){
        return await this.userModel.create(userDto);
    }
   


    
}