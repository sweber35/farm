const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
    
    const app = express();
    app.use(express.static(path.resolve(__dirname, './react-ui/build')));


    const server = http.createServer(app);

    const io = socketIo(server);

    const getApiAndEmit = "TODO"
}