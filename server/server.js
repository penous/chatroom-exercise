import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const port = 8080;

const app = express();
const clientPath = `${__dirname}/../client`;
const server = createServer(app);
const io = new Server(server);
// const server = http.createServer(app);

app.use(express.static(clientPath));

io.on('connection', (socket) => {
  console.log('Someone connected to the server');
  console.log(socket);
});

server.listen(port, () => {
  console.log('Listening to http://localhost:' + port);
});
