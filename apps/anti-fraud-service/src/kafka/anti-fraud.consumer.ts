// import { Injectable } from '@nestjs/common';
// import { AntiFraudService } from '../services/anti-fraud.service';
// import { KafkaService } from './kafkaService';
// import { EventPattern } from '@nestjs/microservices';
//
// @Injectable()
// export class AntiFraudConsumer {
//   constructor(
//     private kafkaService: KafkaService,
//     private antiFraudService: AntiFraudService,
//   ) {}
//   @EventPattern('transaction-created')
//   async handleTransactionCreated(data: any) {
//     const isFraudulent = this.antiFraudService.evaluate(data);
//     // console.log("isFraudulent: ", isFraudulent);
//     const topic = isFraudulent
//       ? 'transaction-rejected'
//       : 'transaction-approved';
//     // console.log("topic: ", topic);
//     await this.kafkaService.emit(topic, {
//       transactionId: data.id,
//       status: isFraudulent ? 'Rejected' : 'Approved',
//     });
//   }
// }
