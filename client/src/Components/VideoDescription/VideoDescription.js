import React from 'react'
import Eyeball from "../../Assets/Icons/views.svg";
import Heart from "../../Assets/Icons/likes.svg";
import "./VideoDescription.scss";

export default function VideoDescription({title, channel, date, views,likes, description}) {
    return (
        <div>
            
            <div>
                <h1 className="video-title">{title}</h1>
            </div>
            <div className="video-stats">
             
                <div className="video-stats__channel-date">
                    <span className="video-stats__channel">By {channel}</span>
                    <span>{date}</span>
                </div>

                <div className="video-stats__likes-views">
                
                    <div className="video-stats__views">
                        <img src={Eyeball} alt="Eyeball" />
                        <span>{views}</span>
                    </div>

                    <div>
                        <img src={Heart} alt="Heart" />
                        <span>{likes}</span>
                    </div>
                
                </div>

            </div>
            <div className="video-description">
                <p>{description}</p>
            </div>
        </div>
    )
}
