import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolResolver } from './school.resolver';
import { School, SchoolSchema } from './entities/school.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema },{ name: User.name, schema: UserSchema }])],

  providers: [SchoolResolver, SchoolService]
})
export class SchoolModule {}
