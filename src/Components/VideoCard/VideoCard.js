import React from 'react';
import "./VideoCard.scss";
import { Link } from 'react-router-dom';

export default function VideoCard({id, title, thumbnail, channel}) {
    return (
        <article className="video-card">
            <Link to={`/${id}`} className="video-card__button">
            
                <div className="video-card__thumbnail-box" >
                    <img className="video-card__thumbnail" src={thumbnail} alt=""/>
                </div>
                <div className="video-card__text">
                    <p className="video-card__title">{title}</p>
                    <p className="video-card__channel">{channel}</p>
                </div>     
            </Link>
        </article>
    )
}
