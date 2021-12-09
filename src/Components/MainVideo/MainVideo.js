import React from 'react';
import { Component } from 'react';
import VideosArray from "../../Assets/Data/video-details.json";
import Video from "../Video/Video";
import VideoTitle from "../VideoTitle/VideoTitle" ;
import VideoStats from "../VideoStats/VideoStats";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideoCommentCounter from '../VideoCommentCounter/VideoCommentCounter';

console.log(VideosArray)
export default class MainVideo extends Component {
//    let parseData = JSON.parse(Data);
    state = {
        videos: VideosArray
   } 
    render(){
    return (
        <div>
            <Video videoImage={VideosArray.image}/>
            <VideoTitle title={VideosArray.title}/>
            <VideoStats likes={VideosArray.likes} views={VideosArray.views} channel={VideosArray.channel} date={VideosArray.timestamp}/>
            <VideoDescription description={VideosArray.description}/>
            <VideoCommentCounter commentCounter={VideosArray.comments}/>

        </div>
    )
}}
