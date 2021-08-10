import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { School, SchoolSchema } from 'src/school/entities/school.entity';
import { SchoolService } from 'src/school/school.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema },{ name: User.name, schema: UserSchema }])],

  providers: [UserResolver, UserService,SchoolService]
})
export class UserModule {}
