import React, { Component } from 'react'
import uploadImage from "../../Assets/Images/Upload-video-preview.jpg";
import Button from '../../Components/Button/Button';
import './VideoUploadPage.scss';
import uploadIcon from "../../Assets/Icons/upload.svg";
import '../../Components/Button/Button.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class VideoUploadPage extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
    console.log(event.target.value)
        axios.post('http://localhost:8000/', {
          title: event.target.title.value,
          description: event.target.description.value
        })
          .then((response) => {
              console.log(response.data)
                axios.get('http://localhost:8000')
                    .then(response => {
                        console.log(response.data)
                    })
        //     // Would be nice to refactor this into a function since we're re-using it
        //       axios.get(process.env.REACT_APP_API_URL + '/trees')
        //         .then((response) => {
        //           this.setState({
        //             trees: response.data
        //           })
                });
        //   });
    
    
      };
    
    render() {
        return (
            <div className="upload-page">
                <h1 className="upload-page__title">Upload Video</h1>
                <div className="upload-page__image-form-wrapper">
                    <div >
                        <p className="upload-page__subtitle">VIDEO THUMBNAIL</p>
                        <img className="upload-page__thumbnail" src={uploadImage} alt="upload thumbnail"/>
                    </div>
                    
                    <form className="upload-page__form" id="form" onSubmit={this.handleSubmit}>
                        <label className="upload-page__form-label">TITLE YOUR VIDEO</label>
                        <input className="upload-page__form-input" placeholder="Add a title to your video" type="title" id="title"/>
                        <label className="upload-page__form-label">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload-page__form-input upload-page__form-input--description" placeholder="Add a description to your video"  type="description" id="description"/>
                    </form>
                </div>    
                <div className="upload-page__button-wrapper">
                    <Button   form="form" icon={uploadIcon} buttonText={"PUBLISH"} buttonUrl={'/'} />
                    <Link className="button-cancel" to='/'>CANCEL</Link>
                </div>    
            </div>
        )
    }
}
