import React from 'react'
import "./Video.scss"


export default function Video({videoImage}) {
    return (
        <div className="video">
            <video poster={videoImage} className="video" controls></video>
        </div>
    )
}
