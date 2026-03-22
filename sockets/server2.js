const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


let users = {
    
}; // { socketId: username }

// 'ankush':123,
//     'shivam':124

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  // User joins with a username
  socket.on('join', (username, room) => {
    users[socket.id] = username;
    socket.join(room); // join room
    console.log(`${username} joined ${room}`);
  });

  // One-to-one message
  socket.on('private_message', ({ toSocketId, message }) => {
    console.log(toSocketId,'toSocketId')
    socket.to(toSocketId).emit('receive_message', {
      from: users[socket.id],
      message,
    });
  });

// Private message
//   socket.on('private_message', ({ toUsername, message }) => {
//           console.log(socket.id,'user')
//     const toSocketId = users[toUsername];
    
//     if(toSocketId){
//       socket.to(toSocketId).emit('receive_message', {
//         from: Object.keys(users).find(key => users[key] === socket.id),
//         message
//       });
//     }
//   });

  // Broadcast message in room (but not to sender)
  socket.on('room_message', ({ room, message }) => {
    socket.to(room).emit('receive_message', {
      from: users[socket.id],
      message,
    });
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log(' User disconnected:', users[socket.id]);
    delete users[socket.id];
  });
});

server.listen(3000, () => {
  console.log(' Server running on port 3000');
});
