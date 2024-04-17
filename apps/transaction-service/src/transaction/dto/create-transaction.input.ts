// import { Field, InputType } from '@nestjs/graphql';
// @InputType()
// export class CreateTransactionInput {
//   @Field()
//   accountExternalIdDebit: string;
//
//   @Field()
//   accountExternalIdCredit: string;
//
//   @Field()
//   transferTypeId: number;
//
//   @Field()
//   value: number;
//
//   @Field({ nullable: true })
//   transactionExternalId?: string;
//
//   @Field({ nullable: true })
//   transactionType?: { name: number };
//
//   @Field({ nullable: true })
//   transactionStatus?: { name: string };
// }
import { ObjectType, Field, ID, Float, InputType, Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionType {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class TransactionStatus {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class Transaction {
  @Field(() => ID)
  transactionExternalId: string;

  @Field(() => TransactionType)
  transactionType: TransactionType;

  @Field(() => TransactionStatus)
  transactionStatus: TransactionStatus;

  @Field(() => Float)
  value: number;

  @Field(() => String)
  createdAt: string;
}

@InputType()
export class CreateTransactionInput {
  @Field(() => ID)
  accountExternalIdDebit: string;

  @Field(() => ID)
  accountExternalIdCredit: string;

  @Field(() => Int)
  transferTypeId: number;

  @Field(() => Float)
  value: number;
}
