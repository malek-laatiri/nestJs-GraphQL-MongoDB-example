import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { School } from 'src/school/entities/school.entity';
import * as mongoose from 'mongoose';
export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field((type) => ID,{ nullable: true })
  _id: mongoose.Types.ObjectId;
  @Field({ nullable: true })
  @Prop()
  firstname: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'School' })
  @Field(()=>School,{ nullable: true })

  school: School;
}
export const UserSchema = SchemaFactory.createForClass(User);
