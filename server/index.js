const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const uniqid = require('uniqid');
app.use(express.static('public'));

// Configuration
require('dotenv').config();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());


// Function to read trees data
function readVideos() {
    const videosFile = fs.readFileSync('./data/videos.json');
    const videosData = JSON.parse(videosFile);
    return videosData;
}


// Routes

// GET / route
app.get('/', (req, res) => {
    res.send(readVideos());
    //  // 1. Read the trees data
    // const videosData = readVideos();

    // // 2. Strip down the trees data
    // const strippedData = videosData.map((video) => {
    //     const newVideo = {};

    //     newVideo.id = video.id;
    //     newVideo.title = video.title;

    //     return newVideo;
    // });
    // console.log(strippedData);
    // // 3. Respond with the stripped down data
    // res.json(strippedData);
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
})




// Start the server
app.listen(port, () => {
    console.log('App listening on port ' + port); 
});
