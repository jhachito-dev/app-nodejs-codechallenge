# Details of my solution to the challenge :rocket:
primera medida se utiliza base de datos mongo para llevar a cabo el desarrollo considerando que al ser una base de datos no relacional nos puede ofrecer un mejor performan en latas concurrencias de escritura y lectura

# Stack

<ol>
  <li>NestJS</li>
  <li>mongodb</li>
  <li>Kafka</li>
  <li>GrahpQl</li>
</ol>

# Como ejecutar los servicios
<ol>
  <li>en la raiz del proyecto ejecutar docker-compose up -d para levatar el docker con kafka y mongodb, serciorar que se este ejecutando Docker en tu maquina local</li>
- docker-compose up -d
  <li>Para levantar el servicio transaction-service ejecutar desde una consola el siguiente comando</li>
- nest start transaction-service
  <li>para levantar el servicio anti-fraud-service ejecutar desde una consola diferente dentro de raiz del proyecto ejecutar el siguiente comando</li>
- nest start anti-fraud-service
</ol>

1. Peticiones postman con GrahpQl, crear transferecia:
URL: http://localhost:3000/graphql
```json
{
  "query": "mutation($input: CreateTransactionInput!) { createTransaction(input: $input) { id status value createdAt } }",
  "variables": {
    "input": {
      "accountExternalIdDebit": "{{$guid}}",
      "accountExternalIdCredit": "{{$guid}}",
      "transferTypeId": 1,
      "value": 1000
    }
  }
}
```
![img_1.png](img_1.png)
2. Peticiones postman con GrahpQl, listar transferecia:
URL: http://localhost:3000/graphql
```json
{
  "query": "query($id: String!) { getTransaction(id: $id) { transactionExternalId transactionType{name} transactionStatus {name} value createdAt } }",
  "variables": {
    "id": "662094e582ee185199fda767"
  }
}
```
![img_2.png](img_2.png)
# Yape Code Challenge :rocket:

Our code challenge will let you marvel us with your Jedi coding skills :smile:. 

Don't forget that the proper way to submit your work is to fork the repo and create a PR :wink: ... have fun !!

- [Problem](#problem)
- [Tech Stack](#tech_stack)
- [Send us your challenge](#send_us_your_challenge)

# Problem

Every time a financial transaction is created it must be validated by our anti-fraud microservice and then the same service sends a message back to update the transaction status.
For now, we have only three transaction statuses:

<ol>
  <li>pending</li>
  <li>approved</li>
  <li>rejected</li>  
</ol>

Every transaction with a value greater than 1000 should be rejected.

```mermaid
  flowchart LR
    Transaction -- Save Transaction with pending Status --> transactionDatabase[(Database)]
    Transaction --Send transaction Created event--> Anti-Fraud
    Anti-Fraud -- Send transaction Status Approved event--> Transaction
    Anti-Fraud -- Send transaction Status Rejected event--> Transaction
    Transaction -- Update transaction Status event--> transactionDatabase[(Database)]
```

# Tech Stack

<ol>
  <li>Node. You can use any framework you want (i.e. Nestjs with an ORM like TypeOrm or Prisma) </li>
  <li>Any database</li>
  <li>Kafka</li>    
</ol>

We do provide a `Dockerfile` to help you get started with a dev environment.

You must have two resources:

1. Resource to create a transaction that must containt:

```json
{
  "accountExternalIdDebit": "Guid",
  "accountExternalIdCredit": "Guid",
  "tranferTypeId": 1,
  "value": 120
}
```

2. Resource to retrieve a transaction

```json
{
  "transactionExternalId": "Guid",
  "transactionType": {
    "name": ""
  },
  "transactionStatus": {
    "name": ""
  },
  "value": 120,
  "createdAt": "Date"
}
```

## Optional

You can use any approach to store transaction data but you should consider that we may deal with high volume scenarios where we have a huge amount of writes and reads for the same data at the same time. How would you tackle this requirement?

You can use Graphql;

# Send us your challenge

When you finish your challenge, after forking a repository, you **must** open a pull request to our repository. There are no limitations to the implementation, you can follow the programming paradigm, modularization, and style that you feel is the most appropriate solution.

If you have any questions, please let us know.
