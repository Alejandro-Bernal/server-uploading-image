require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// config files
const dbConnect = require("./config/mongo-connect");
const user = require('./models/user');
// routes
const userRoutes = require('./routes/user-routes');

const server = express();
const portNumber = process.env.PORT;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

dbConnect();

server.use('/user', userRoutes);


server.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'The Server is Running.'
    });
});

server.listen(portNumber, () => {
    console.log(`Server Listening on port: ${portNumber}`);
});