import React, { Component } from 'react'
import uploadImage from "../../Assets/Images/Upload-video-preview.jpg";
import Button from '../../Components/Button/Button';
import './VideoUploadPage.scss';
import uploadIcon from "../../Assets/Icons/upload.svg";
import '../../Components/Button/Button.scss';
import { Link } from 'react-router-dom';

export default class VideoUploadPage extends Component {
    render() {
        return (
            <div className="upload-page">
                <h1>Upload Video</h1>
                <p className="upload-page__subtitle">VIDEO THUMBNAIL</p>
                <img className="upload-page__thumbnail" src={uploadImage} alt="upload thumbnail"/>
                
                <form className="upload-page__form">
                    <label className="upload-page__form-label">TITLE YOUR VIDEO</label>
                    <input className="upload-page__form-input" placeholder="Add a title to your video"/>
                    <label className="upload-page__form-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload-page__form-input upload-page__form-input--description" placeholder="Add a description to your video"  />
                </form>
                <Button  icon={uploadIcon} buttonText={"PUBLISH"} buttonUrl={'/'}/>
                <Link className="button-cancel" to='/'>CANCEL</Link>
            </div>
        )
    }
}
