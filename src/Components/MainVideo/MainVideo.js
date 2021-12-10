import React from 'react';
import { Component } from 'react';
import VideosArray from "../../Assets/Data/video-details.json";
import VideoDetailsArray from "../../Assets/Data/videos.json";
import Video from "../Video/Video";
import VideoTitle from "../VideoTitle/VideoTitle" ;
import VideoStats from "../VideoStats/VideoStats";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideoCommentCounter from '../VideoCommentCounter/VideoCommentCounter';
import Comments from "../Comments/Comments";
import VideoList from '../VideoList/VideoList';

console.log(VideosArray)
export default class MainVideo extends Component {
    state = {
        videos: VideosArray[0],
        videoDetails: VideoDetailsArray
   } 

   selectVideo = (videoId) => {

    const selectedVideo = VideosArray.find((video) => videoId === video.id);

        this.setState({
            videos:selectedVideo,
        });
   };
   
    render(){
    return (
        <div>
            <Video videoImage={this.state.videos.image}/>
            <VideoTitle title={this.state.videos.title}/>
            <VideoStats likes={this.state.videos.likes} views={this.state.videos.views} channel={this.state.videos.channel} date={this.state.videos.timestamp}/>
            <VideoDescription description={this.state.videos.description}/>
            <VideoCommentCounter commentCounter={this.state.videos.comments.length}/>
            {/* Comment Section */}
            <Comments commentsArray={this.state.videos.comments}/>
            <VideoList videos={this.state.videoDetails} selectVideo={this.selectVideo}/>
        </div>
    )
}}
