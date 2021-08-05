import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import * as mongoose from 'mongoose';

export type SchoolDocument = School & Document;
@ObjectType()
@Schema()
export class School {
  @Field(() => ID,{ nullable: true })
  _id: string;
  @Prop()
  @Field(() => String,{ nullable: true })
  name: string;
  @Field(()=>[User],{nullable:true})
  users:User[];
}
export const SchoolSchema= SchemaFactory.createForClass(School);