import React from 'react'
import "./CommentCard.scss";

export default function CommentCard({name, comment,date}) {
    return (
        <div className="comment-card">
             <div className="comment-card__avatar"></div>


            <div className="comment-card__text-box">
                <div className="comment-card__title-box">
                    <p className="comment-card__name">{name}</p>
                    {/* MAke sure to set appropriate date!!!! */}
                    <p className="comment-card__date">{date}</p>
                </div>

                <div className="comment-card__comment-box">
                    <p className="comment-card__comment">{comment}</p>
                </div>
            </div>
        </div>
    )
}
