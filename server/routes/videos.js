const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

// Function to read trees data
function readVideos() {
    const videosFile = fs.readFileSync('./data/videos.json');
    const videosData = JSON.parse(videosFile);
    return videosData;
}


// Routes

router.get('/', (_req, res) => {
    res.send(readVideos());

});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
})

router.post('/',(req,res)=> {
      const newVideo = {
        channel: "Placeholder Channel",
        comments: [{name: "John Doe", comment:"Placeholder Comment"}],
        description: req.body.description,
        duration: "0:00",
        id: uniqid(),
        image: '/Users/brynfrayne/BrainStation-Local/Brainstation/Projects/BrainFlix/bryn-frayne-brainflix/client/src/Assets/Images/Upload-video-preview.jpg',
        likes: "0",
        timestamps: new Date().getTime(),
        title: req.body.title,
        video: "Placeholder Video URL",
        views: "0"

    };


    const videos = readVideos();
    videos.push(newVideo);
    fs.writeFileSync('./data/videos.json', JSON.stringify(videos));

    res.status(201).json(newVideo);
})

module.exports = router;