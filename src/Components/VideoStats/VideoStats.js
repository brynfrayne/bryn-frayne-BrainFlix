import React from 'react';
import Eyeball from "../../Assets/Icons/views.svg";
import Heart from "../../Assets/Icons/likes.svg";
import "./VideoStats.scss";

export default function VideoStats(props) {
    return (
        <div className="video-stats">
             
            <div className="video-stats__channel-date">
                <span className="video-stats__channel">By {props.channel}</span>
                <span>{props.date}</span>
            </div>

            {/* <!-- View count component --> */}
            <div className="video-stats__likes-views">
                <div className="video-stats__views">
                    <img src={Eyeball} alt="Eyeball" />
                    <span>{props.views}</span>
                </div>

                {/* <!-- Like count component --> */}
                <div>
                    <img src={Heart} alt="Heart" />
                    <span>{props.likes}</span>
                </div>
            </div>

        </div>
    )
}
