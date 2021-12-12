import React from 'react';
import "./VideoCard.scss";

export default function VideoCard({id, title, thumbnail, channel, selectVideo}) {
    return (
        <article className="video-card">
            <button className="video-card__button" onClick={() => {selectVideo(id)}}
>
                <div className="video-card__thumbnail-box" >
                    <img className="video-card__thumbnail" src={thumbnail} alt=""/>
                </div>
                <div className="video-card__text">
                    <p className="video-card__title">{title}</p>
                    <p className="video-card__channel">{channel}</p>
                </div>     
                </button>    
        </article>
    )
}
