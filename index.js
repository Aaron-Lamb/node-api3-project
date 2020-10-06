const express = require('express');
const logger = require('./middleware/logger');

const server = express();
const port = 8080;

server.use(express.json());
server.use(logger());

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'Something went wrong, please try later, or contact us.'
    })
})

server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})