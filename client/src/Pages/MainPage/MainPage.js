import React, { Component } from 'react'
import '../../App.scss';
import Video from "../../Components/Video/Video";
import VideoDescription from "../../Components/VideoDescription/VideoDescription";
import Comments from "../../Components/Comments/Comments";
import VideoList from '../../Components/VideoList/VideoList';
import axios from 'axios';
import "./MainPage.scss";


// const apiKey = "?api_key=58b01201-9bc4-44e9-8026-c3e3e1711c36";
const url = "http://localhost:8000";

// const url = "http://project-2-api.herokuapp.com/videos/";

export default class MainPage extends Component {
    state = {
        videos: {
           
        },
        videoList: []
   } 

   getSpecificVideoId(id) {
    axios.get(url)

    //    axios.get('http://project-2-api.herokuapp.com/videos/'+ id +'?api_key=58b01201-9bc4-44e9-8026-c3e3e1711c36')
        .then((response) => {
           console.log(response.data) 
           const filteredVideo = response.data.filter(video=>video.id === id)
           
            this.setState({
                videos:filteredVideo[0],
        });
    });
   }

   getVideo = () => {
       if (this.props.match.params.videoId) {
           this.getSpecificVideoId(this.props.match.params.videoId);
       } else {
        axios.get(url)

        //    axios.get('http://project-2-api.herokuapp.com/videos?api_key=58b01201-9bc4-44e9-8026-c3e3e1711c36')
            .then((response) => {
                this.getSpecificVideoId(response.data[0].id);
            });
       }
   };


   componentDidMount() {
    axios.get(url)

    //    axios.get(url+apiKey)
        .then((response) => {
            this.setState({
                videoList:response.data,
              
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
    
    if (!this.state.videos.comments) {
        return <p>Video loading...</p>;
    }    

    const filteredVideoList = this.state.videoList.filter((video) => video.id !== this.state.videos.id);
    
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

