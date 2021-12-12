import React from 'react'
import "./VideoDescription.scss";

export default function VideoDescription(props) {
    return (
        <div className="video-description">
            <p>{props.description}</p>
        </div>
    )
}
