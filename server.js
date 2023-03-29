// Comments are made by Jiaqi Cheng to review code

const express = require('express'); //Imports the library express under const name express
const connectDB = require('./config/db'); //Imports ./config/db file  under const name express

const app = express(); //Server

connectDB();    //Connect Database

app.get('/', (req, res) => res.send('API Running')); // localhost:PORT/ returns 'API Running'

const PORT = process.env.PORT || 5000;  // PORT is either process.env.port or 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // ` is u+0060, indicator for server status on terminal
