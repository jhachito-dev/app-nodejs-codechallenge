// import { Module } from '@nestjs/common';
// import { AntiFraudService } from './services/anti-fraud.service';
// import { ClientsModule, Transport } from '@nestjs/microservices';
//
// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'KAFKA_SERVICER',
//         transport: Transport.KAFKA,
//         options: {
//           client: {
//             brokers: ['localhost:9092'],
//           },
//         },
//       },
//     ]),
//   ],
//   providers: [AntiFraudService],
// })
// export class AntiFraudModule {}
