import React from 'react'
import VideoCard from '../VideoCard/VideoCard';
import "./VideoList.scss";

export default function VideoList({videos}) {
    return (
        <div className="video-list">
            <p className="video-list__subtitle">NEXT VIDEOS</p>
            {videos.map((video) => (
                <VideoCard key={video.id} id={video.id} title={video.title} thumbnail={video.image} channel={video.channel}/>
            ))}
        </div>
        
    )
}
