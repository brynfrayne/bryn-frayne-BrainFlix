import React from 'react';
import { Component } from 'react';
import VideosArray from "../../Assets/Data/video-details.json";
import VideoDetailsArray from "../../Assets/Data/videos.json";
import Video from "../Video/Video";
import VideoTitle from "../VideoTitle/VideoTitle" ;
import VideoStats from "../VideoStats/VideoStats";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import VideoList from '../VideoList/VideoList';
import "./MainVideo.scss";
import { formattedDate } from "../../util.js";

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
    const filteredVideoList = this.state.videoDetails.filter((video) => video.id !== this.state.videos.id)
    

     
    return (
        <div className="main-video">
            <Video videoImage={this.state.videos.image}/>
            <div className="comment-video-wrapper">
                <div className="main-video__text">
                    <VideoTitle title={this.state.videos.title}/>
                    <VideoStats likes={this.state.videos.likes} views={this.state.videos.views} channel={this.state.videos.channel} date={new Date(this.state.videos.timestamp).toLocaleDateString()}/>
                    <VideoDescription description={this.state.videos.description}/>
                    <Comments commentCounter={this.state.videos.comments.length} commentsArray={this.state.videos.comments}/>
                </div>
                <VideoList videos={filteredVideoList} selectVideo={this.selectVideo}/>
            </div>
            </div>
        
    )
}}
