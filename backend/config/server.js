const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const port = 3003;

server.use(bodyParser.urlencoded({extended: true }));
server.use(bodyParser.json());
server.listen(port, function(){
    console.log(`BACKEND IS RUNNING on port ${port}`);
});

module.exports = server;