import React from 'react';
import Eyeball from "../../Assets/Icons/views.svg";
import Heart from "../../Assets/Icons/likes.svg";
import "./VideoStats.scss";

export default function VideoStats(props) {
    return (
        <div className="video-stats">
             

            <span>By {props.channel}</span>
            {/* <span>{props.date}</span> *   ------ adjust date!!!!/}

            {/* <!-- View count component --> */}
            <div>
                <img src={Eyeball} alt="Eyeball" />
                <span>{props.views}</span>
            </div>

            {/* <!-- Like count component --> */}
            <div>
                <img src={Heart} alt="Heart" />
                <span>{props.likes}</span>
            </div>


        </div>
    )
}
