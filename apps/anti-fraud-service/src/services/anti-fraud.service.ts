// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { ClientKafka } from '@nestjs/microservices';
//
// @Injectable()
// export class AntiFraudService implements OnModuleInit {
//   constructor(private readonly kafka: ClientKafka) {}
//
//   async onModuleInit() {
//     this.kafka.subscribeToResponseOf('transactions.validate');
//     await this.kafka.connect();
//   }
//
//   async handleTransaction(payload: any): Promise<void> {
//     const { value, transactionId } = payload;
//
//     if (value > 1000) {
//       // Rechazar transacción
//       this.kafka.emit('transaction.status.update', {
//         transactionId,
//         status: 'rejected',
//       });
//     } else {
//       // Aprobar transacción
//       this.kafka.emit('transaction.status.update', {
//         transactionId,
//         status: 'approved',
//       });
//     }
//   }
// }
