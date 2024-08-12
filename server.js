import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import os from 'os';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

const connectedUsers = new Set();

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);
  connectedUsers.add(socket.id);
  console.log('Connected users:', connectedUsers);

  // socket.on('chat message', (msg) => {
  //   io.emit('chat message', { msg: msg, user: socket.id });
  // });

  socket.on('send', (message) => { //for listening
    console.log(message, socket.id);
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
    connectedUsers.delete(socket.id);
    console.log('Connected users:', connectedUsers);
  });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Utility function to get local IP address
const getLocalIPAddress = () => {
  const interfaces = os.networkInterfaces();
  // for (const name of Object.keys(interfaces)) {
  //   for (const net of interfaces[name]) {
  //     if (net.family === 'IPv4' && !net.internal) {
  //       return net.address;
  //     }
  //   }
  // }
  return 'localhost'; // fallback to localhost
};

const LOCAL_IP = getLocalIPAddress();
server.listen(4000, LOCAL_IP, () => {
  console.log(`listening on ${LOCAL_IP}:4000`);
});

