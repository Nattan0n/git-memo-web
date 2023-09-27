const path = require('path');
const express = require('express');
const homeRouter = require('./routers/home');
const createRouter = require('./routers/create');
const deleteRouter = require('./routers/delete');
const db = require('./db');

const serv = express();

const bodyParser = require('body-parser');
serv.use(bodyParser.urlencoded({extended: false}));

serv.set('view engine', 'ejs');
serv.use(express.static(path.join(__dirname, 'public')));

serv.use(createRouter);
serv.use(homeRouter);
serv.use('/delete', deleteRouter);;

serv.listen(3002);
