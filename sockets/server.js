const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Store username → socket ID
let users = {};

io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);
       
  // User sets their username
  socket.on('set_username', (username) => {
    socket.username = username; 
    users[username] = socket.id;
    // Send updated user list to all clients
    console.log(Object.keys(users),'Object.keys(users)')
    io.emit('users_list', Object.keys(users));
  });

  // Join room
  socket.on('join_room', (room) => {
    socket.join(room);
    socket.currentRoom = room;
    console.log(`${socket.username} joined ${room}`);
  });


  // Private message
  socket.on('private_message', ({ toUsername, message }) => {
    const toSocketId = users[toUsername];
    if (toSocketId) {
      socket.to(toSocketId).emit('receive_message', {
        from: Object.keys(users).find(u => users[u] === socket.id),
       message: message,
        private:'private'
      });
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    for (let username in users) {
      if (users[username] === socket.id) {
        delete users[username];
      }
    }
    io.emit('users_list', Object.keys(users));
  });

  // Room message
  socket.on('room_message', ({ message }) => {
    const room = socket.currentRoom;
    if (room) {
      socket.to(room).emit('receive_message', {
        from: socket.username,
        message,
        type: 'room'
      });
    }
  });

  // Disconnect
  socket.on('disconnect', () => {
    if (socket.username) {
      delete users[socket.username];
      io.emit('users_list', Object.keys(users));
    }
  });
});

server.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
