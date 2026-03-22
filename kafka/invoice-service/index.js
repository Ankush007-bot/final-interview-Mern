const express = require("express");
const { Kafka } = require("kafkajs");

const app = express();

// Kafka Setup
const kafka = new Kafka({
  clientId: "invoice-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "invoice-group" });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: "order-events", fromBeginning: true });

  console.log("Invoice Service connected to Kafka and waiting for events...");

  await consumer.run({
    eachMessage: async ({ message }) => {
      const data = JSON.parse(message.value.toString());
      console.log("\n-------- KAFKA EVENT RECEIVED --------");
      console.log("Order Received:", data);
      console.log(`🧾 Invoice created for Order #${data.orderId}`);
      console.log("--------------------------------------");
    },
  });
}

startConsumer();

// Just to prove it's a running server
app.listen(5000, () => {
  console.log("Invoice Service running on port 5000");
});
