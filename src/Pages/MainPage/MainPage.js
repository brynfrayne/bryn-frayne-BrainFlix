import React, { Component } from 'react'
import '../../App.scss';
import Video from "../../Components/Video/Video";
import VideoDescription from "../../Components/VideoDescription/VideoDescription";
import Comments from "../../Components/Comments/Comments";
import VideoList from '../../Components/VideoList/VideoList';
import axios from 'axios';
import "./MainPage.scss";


const apiKey = "?api_key=58b01201-9bc4-44e9-8026-c3e3e1711c36";
const url = "http://project-2-api.herokuapp.com/videos/";

export default class MainPage extends Component {
    state = {
        videos: {
            "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
            "title": "BMX Rampage: 2021 Highlights",
            "channel": "Red Cow",
            "image": "https://i.imgur.com/l2Xfgpl.jpg",
            "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
            "views": "1,001,023",
            "likes": "110,985",
            "duration": "4:01",
            "video": "https://project-2-api.herokuapp.com/stream",
            "timestamp": 1626032763000,
            "comments": [
                {
                    "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
                    "name": "Micheal Lyons",
                    "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
                    "likes": 0,
                    "timestamp": 1628522461000
                },
                {
                    "id": "091de676-61af-4ee6-90de-3a7a53af7521",
                    "name": "Gary Wong",
                    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                    "likes": 0,
                    "timestamp": 1626359541000
                },
                {
                    "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
                    "name": "Theodore Duncan",
                    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
                    "likes": 0,
                    "timestamp": 1626011132000
                }
            ]
        },
        videoDetails: []
   } 

   getSpecificVideoId(id) {
       axios.get('http://project-2-api.herokuapp.com/videos/'+ id +'?api_key=58b01201-9bc4-44e9-8026-c3e3e1711c36')
        .then((response) => {
            
            this.setState({
                videos:response.data,
        });
    });
   }

   getVideo = () => {
       if (this.props.match.params.videoId) {
           this.getSpecificVideoId(this.props.match.params.videoId);
       } else {
           axios.get('http://project-2-api.herokuapp.com/videos?api_key=58b01201-9bc4-44e9-8026-c3e3e1711c36')
            .then((response) => {
                this.getSpecificVideoId(response.data[0].id);
            });
       }
   };


   componentDidMount() {
       axios.get(url+apiKey)
        .then((response) => {
            this.setState({
                videoDetails:response.data,
              
            })
        })
        this.getVideo();
   }

   componentDidUpdate(prevProps) {
       if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
           this.getVideo();
       }
   }
   
    render(){
       
    const filteredVideoList = this.state.videoDetails.filter((video) => video.id !== this.state.videos.id);
    
    return (
        <div className="main-video">
            <Video videoImage={this.state.videos.image}/>
            <div className="comment-video-wrapper">
                <div className="main-video__text">
                    <VideoDescription title={this.state.videos.title} description={this.state.videos.description} likes={this.state.videos.likes} views={this.state.videos.views} channel={this.state.videos.channel} date={new Date(this.state.videos.timestamp).toLocaleDateString()}/>
                    <Comments commentsArray={this.state.videos.comments}/>
                </div>
                <VideoList  videos={filteredVideoList}/>
            </div>
        </div>
        
    )
}}

