// import { Field, Float, ObjectType } from '@nestjs/graphql';
//
// @ObjectType()
// export class TransactionType {
//   @Field()
//   name: string;
// }
//
// @ObjectType()
// export class TransactionStatus {
//   @Field()
//   name: string;
// }
//
// @ObjectType()
// export class CreateTransactionOutput {
//   @Field()
//   transactionExternalId: string;
//
//   @Field(() => TransactionType)
//   transactionType: TransactionType;
//
//   @Field(() => TransactionStatus)
//   transactionStatus: TransactionStatus;
//
//   @Field(() => Float)
//   value: number;
//
//   @Field()
//   createdAt: Date;
// }
