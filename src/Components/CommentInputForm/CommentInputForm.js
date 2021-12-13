import React from 'react'
import "./CommentInputForm.scss";
import commentIcon from "../../Assets/Icons/add_comment.svg";
import Button from '../Button/Button';

export default function CommentInputForm(props) {
    return (
        <div className="comment-input">
            <div className="avatar"></div>

            <div className="comment-input__form">
                <textarea className="comment-input__textarea" type="comment" placeholder="Add a new comment" />
                <Button icon={commentIcon} buttonText={"COMMENT"}/>
            </div>
        </div>
    )
}
