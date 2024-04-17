// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
// @ObjectType()
// @Schema()
// export class Transaction extends Document {
//   @Field(() => ID)
//   id: string;
//
//   @Field()
//   @Prop({ required: true })
//   accountExternalIdDebit: string;
//
//   @Field()
//   @Prop()
//   accountExternalIdCredit: string;
//
//   @Field(() => Int)
//   @Prop({ required: true })
//   transferTypeId: number;
//
//   @Field(() => Float)
//   @Prop({ required: true })
//   value: number;
//
//   @Field()
//   @Prop({ default: 'Pending' })
//   status: string;
//
//   @Field()
//   @Prop({ type: Date, default: Date.now })
//   createdAt: Date;
//
//   @Field()
//   @Prop({ type: Date, default: Date.now })
//   updatedAt: Date;
// }
// export const TransactionSchema = SchemaFactory.createForClass(Transaction);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import {
  TransactionStatus,
  TransactionType,
} from '../dto/create-transaction.input';
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
@Schema()
export class Transaction extends Document {
  @Field(() => ID)
  id: string;

  @Field(() => ID, { nullable: true })
  @Prop({ default: uuidv4 })
  transactionExternalId?: string;

  @Field()
  @Prop({ default: 'Pending' })
  status: string;

  @Field(() => ID)
  @Prop({ required: true })
  accountExternalIdDebit: string;

  @Field(() => ID)
  @Prop({ required: true })
  accountExternalIdCredit: string;

  @Field(() => Int)
  @Prop({ required: true })
  transferTypeId: number;

  @Field(() => Float)
  @Prop({ required: true })
  value: number;

  @Field(() => Date)
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: Date.now })
  updatedAt?: Date;

  @Field(() => TransactionType, { nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TransactionType' })
  transactionType?: TransactionType;

  @Field(() => TransactionStatus, { nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TransactionStatus' })
  transactionStatus?: TransactionStatus;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
