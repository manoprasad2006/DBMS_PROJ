require('dotenv').config();
const express = require('express');
const cors = require('cors'); //hello meenubang05 :D
const {db} = require('./db/DB.JS'); //hello mahashree :D
const {readdirSync} = require ('fs')

 
const app = express();
const PORT = process.env.PORT || 5001; // Change to another port if 5000 is in use

// Middlewares
app.use(express.json()); 
app.use(cors()); 

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


// Start the server
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Listening on port:', PORT);
    });
};

server();
