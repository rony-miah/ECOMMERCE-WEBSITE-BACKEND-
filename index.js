const express = require('express');
const dbConnection = require('./config/dbConnection');
const app = express();
app.use(express.json());
require('dotenv').config();
const  route  = require('./route');

dbConnection();

app.use(route);

app.listen(3000);