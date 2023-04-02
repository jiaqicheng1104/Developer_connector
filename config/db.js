// Comments are made by Jiaqi Cheng to review code

const mongoose = require('mongoose'); //Imports the library mongoose under const name mongoose
const config = require('config'); //Imports the Folder config under const name config
const db = config.get('mongoURI');  //Imports the connection String for MongoDB altas variable name mongoURI from config/default.json

const connectDB = async () => { //asynchronous function w/ error detection to connect to Database in other files
    try {
        await mongoose.connect(db, {}); 
        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);
        process.exit(1); // Exit the connection with Failure, which is 1.
    }
}; 

module.exports = connectDB; // If this file is called in other files, const connectDB is called 
