const express= require('express')
const app= express()
const cors=require('cors')
 app.use(cors())

const port=3000
//npm install express socket.io

const http = require('http')
const {Server}= require('socket.io')

const httpServer= http.createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("Received:", msg);
    io.emit("message", msg); // send to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});

