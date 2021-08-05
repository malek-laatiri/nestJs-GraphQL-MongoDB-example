import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}

 async create(createUserInput: CreateUserInput):Promise<User> {
   const newUser=new this.userModel(createUserInput);
    return await newUser.save();
  }

  async findAll():Promise<User[]> {
    return await this.userModel.find().populate('school').exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
