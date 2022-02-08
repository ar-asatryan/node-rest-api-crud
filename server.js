const http = require("http");
const app = require('./app');
const dotenv = require('dotenv').config();

const port = process.env.PORT;

// const mongoPath = process.env.MONGO_PATH;
// console.log("mongoPath", mongoPath);

const server = http.createServer(app);

server.listen(port);
