const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const deliveriesRoute = require('../src/routes/deliveriesRoute');
const mongoConnection = mongoose.connect('mongodb://route_easy:route123@ds249717.mlab.com:49717/route_easy', { useNewUrlParser: true });
mongoConnection 
    .then(
        db => console.log('\x1b[36m%s\x1b[0m', 'MongoDB successfully connected'),
        err => console.log('\x1b[33m%s\x1b[0m', 'Error while connecting to mongodb: ', err)
);

app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false }));

app.use('/delivery', deliveriesRoute);

module.exports = app;