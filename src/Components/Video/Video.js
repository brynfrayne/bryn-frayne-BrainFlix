import React from 'react'
import "./Video.scss"


export default function Video(props) {
    return (
        <div>
            <video className="video" controls>{props.videoImage}</video>
        </div>
    )
}
