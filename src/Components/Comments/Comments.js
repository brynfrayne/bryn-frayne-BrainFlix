import React from 'react'
import CommentInputForm from '../CommentInputForm/CommentInputForm'
import CommentCard from '../CommentCard/CommentCard';
import "./Comments.scss";
import * as uid from 'uniqid';

export default function Comments({commentsArray}) {
    
    return (
        
        
        <div>
            
            <p className="comment__counter">{commentsArray.length} Comments</p>
            <p className="comment-input__subtitle">JOIN THE CONVERSATION</p>
            <CommentInputForm />
            {commentsArray.map((commentObj) => (   
            <CommentCard key={uid()} name={commentObj.name} date={new Date(commentObj.timestamp).toLocaleDateString()} comment={commentObj.comment} /> 
            ))}
        
        </div>
    )
}
