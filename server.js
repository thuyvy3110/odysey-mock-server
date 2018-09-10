const jsonServer = require('json-server');
const genData = require('./gen_data.js');

const server = jsonServer.create();
const router = jsonServer.router(genData());

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);