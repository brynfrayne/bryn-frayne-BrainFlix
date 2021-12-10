import React from 'react'
import VideoCard from '../VideoCard/VideoCard'

export default function VideoList({videos, selectVideo}) {
    return (
        <div>
            <p>NEXT VIDEOS</p>
            {videos.map((video) => (
                <VideoCard selectVideo={selectVideo} id={video.id} title={video.title} thumbnail={video.image} channel={video.channel}/>
            ))}
        </div>
        
    )
}
