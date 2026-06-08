const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:3000',
      'https://traceless-web.vercel.app',
    ],
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req, res) => {
  res.send('Socket server running');
});

const users = new Map();

io.on('connection', (socket) => {
  console.log('client connected', socket.id);

  socket.on('details', ({ uniqueId, socketId }) => {
    const resolvedSocketId = socketId || socket.id;
    users.set(uniqueId, resolvedSocketId);
    console.log('registered peer token', uniqueId, '->', resolvedSocketId);
  });

  socket.on('send-signal', ({ to, ...payload }) => {
    const targetSocketId = users.get(to);
    if (targetSocketId) {
      console.log('forwarding send-signal to', to, targetSocketId);
      io.to(targetSocketId).emit('signaling', payload);
    } else {
      console.log('missing target for send-signal', to);
    }
  });

  socket.on('accept-signal', ({ to, ...payload }) => {
    const targetSocketId = users.get(to);
    if (targetSocketId) {
      console.log('forwarding accept-signal to', to, targetSocketId);
      io.to(targetSocketId).emit('callAccepted', payload);
    } else {
      console.log('missing target for accept-signal', to);
    }
  });

  socket.on('signal', (data) => socket.broadcast.emit('signal', data));

  socket.on('disconnect', () => {
    for (const [token, mappedSocketId] of users.entries()) {
      if (mappedSocketId === socket.id) {
        users.delete(token);
      }
    }
    console.log('client disconnected', socket.id);
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Socket server listening on ${PORT}`));
