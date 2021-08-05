import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSchoolInput } from './dto/create-school.input';
import { UpdateSchoolInput } from './dto/update-school.input';
import { School, SchoolDocument } from './entities/school.entity';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private SchoolModel:Model<SchoolDocument>){}

  async create(createSchoolInput: CreateSchoolInput) {
    let newUser=new this.SchoolModel(createSchoolInput);
    return await newUser.save();  }

  async findAll() {
    return await this.SchoolModel.find().populate('users').exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolInput: UpdateSchoolInput) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
