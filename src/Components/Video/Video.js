import React from 'react'
import "./Video.scss"


export default function Video(props) {
    return (
        <div>
            <video poster={props.videoImage} className="video" controls></video>
        </div>
    )
}
