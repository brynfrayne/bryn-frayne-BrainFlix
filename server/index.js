const express = require('express');
const app = express();
const cors = require('cors');
const videos = require('./routes/videos');

// Configuration
require('dotenv').config();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/', videos);

// Start the server
app.listen(port, () => {
    console.log('App listening on port ' + port); 
});
