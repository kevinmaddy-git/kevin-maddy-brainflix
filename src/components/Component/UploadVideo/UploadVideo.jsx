import React, { useState } from "react";
import thumbnail from "../../../assets/images/Images/Upload-video-preview.jpg";
import "../UploadVideo/UploadVideo.scss";
import Publish from "../Publish/Publish";

function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="video__container">
      <div className="video__info">
        <h1 className="video__info-text">Upload Video</h1>
        <h2 className="video__info-title">VIDEO THUMBNAIL</h2>
        <img className="video__info-thumbnail" src={thumbnail} alt="Video Thumbnail" />
      </div>
      <div className="video__form">
        <h2 className="video__form-title">TITLE YOUR VIDEO</h2>
        <input
          className="video__form-input"
          type="text"
          placeholder="Add a title to your video"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <h2 className="video__form-title">ADD A VIDEO DESCRIPTION</h2>
        <textarea
          className="video__form-textarea"
          placeholder="Add a description to your video"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <Publish title={title} description={description} />
    </div>
  );
}

export default UploadVideo;
