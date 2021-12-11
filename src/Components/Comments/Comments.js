import React from 'react'
import CommentInputForm from '../CommentInputForm/CommentInputForm'
import CommentCard from '../CommentCard/CommentCard';

export default function Comments(props) {
    return (
        <div>
            <CommentInputForm />
            {props.commentsArray.map((comment) => (
               <CommentCard key={comment.id} name={comment.name} comment={comment.comment} /> 
            ))}
        </div>
    )
}
