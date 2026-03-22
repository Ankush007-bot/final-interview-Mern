const express = require("express");
const { Kafka } = require("kafkajs");

const app = express();
app.use(express.json());

// Kafka Setup
const kafka = new Kafka({
  clientId: "order-service",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function connectProducer() {
  await producer.connect();
  console.log("Order Service Connected to Kafka");
}

connectProducer();

// API Route
app.post("/order", async (req, res) => {
  const { orderId, amount } = req.body;

  const payload = {
    orderId,
    amount,
    status: "ORDER_PLACED",
    time: new Date(),
  };

  await producer.send({
    topic: "order-events",
    messages: [{ value: JSON.stringify(payload) }],
  });

  console.log("Order sent:", payload);

  res.json({ message: "Order Created", payload });
});

// Server
app.listen(4000, () => {
  console.log("Order Service running on port 4000");
});
