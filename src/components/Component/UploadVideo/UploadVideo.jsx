import React from "react";
import thumbnail from "../../../assets/images/Images/Upload-video-preview.jpg";

function UploadVideo() {
  return (
    <div>
      <div className="video-info">
        <h2 className="video-info__title">VIDEO THUMBNAIL</h2>
        <img className="video-info__thumbnail" src={thumbnail} alt="Video Thumbnail" />
      </div>
      <div className="video-form">
        <h2 className="video-form__title">TITLE YOUR VIDEO</h2>
        <input className="video-form__input" type="text" placeholder="Add a title to your video" />
        <h2 className="video-form__title">ADD A VIDEO DESCRIPTION</h2>
        <textarea className="video-form__textarea" placeholder="Add a description to your video"></textarea>
      </div>
    </div>
  );
}

export default UploadVideo;
