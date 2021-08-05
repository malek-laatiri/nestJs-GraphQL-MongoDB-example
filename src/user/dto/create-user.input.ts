import { InputType, Int, Field } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';

@InputType()
export class CreateUserInput {
  @Field()
  firstname: string;
  @Field()
  school: string;
}
