import React from 'react'
import CommentInputForm from '../CommentInputForm/CommentInputForm'
import CommentCard from '../CommentCard/CommentCard';
import "./Comments.scss";
import * as uid from 'uniqid';

export default function Comments({commentCounter, commentsArray}) {
   
     
    return (
        <div>
            
            <p className="comment__counter">{commentCounter} Comments</p>
            <p className="comment-input__subtitle">JOIN THE CONVERSATION</p>
            <CommentInputForm />
            {commentsArray.map((comment) => (   
            <CommentCard key={uid()} name={comment.name} date={new Date(comment.timestamp).toLocaleDateString()} comment={comment.comment} /> 
            ))}
        
        </div>
    )
}
