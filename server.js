// Comments are made by Jiaqi Cheng to review code

const express = require('express'); //Imports the library express under const name express
const connectDB = require('./config/db'); //Imports ./config/db file  under const name express

const app = express(); //Server

connectDB();    //Connect Database

app.use(express.json({ extended: false}));   // Init middleware

app.get('/', (req, res) => res.send('API Running')); // localhost:PORT/ returns 'API Running'

app.use('/api/users', require('./routes/api/users')); // localhost:PORT/api/users goes to that required file
app.use('/api/auth', require('./routes/api/auth')); // localhost:PORT/api/users goes to that required file
app.use('/api/profile', require('./routes/api/profile')); // localhost:PORT/api/users goes to that required file
app.use('/api/posts', require('./routes/api/posts')); // localhost:PORT/api/users goes to that required file

const PORT = process.env.PORT || 5000;  // PORT is either process.env.port or 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // ` is u+0060, indicator for server status on terminal
