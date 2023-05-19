import React from 'react';
import './SideVideo.scss';

function SideVideo({ id, title, channelName, image, switchCurrentVideo }) {
  const clickHandler = () => {
    switchCurrentVideo(id);
  };

  const videoStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="sideVideo" onClick={clickHandler}>
      <div className="sideVideo__img" style={videoStyle}></div>
      <div className="sideVideo__description">
        <span className="sideVideo__description-title" title={title}>
          {title}
        </span>
        <span className="sideVideo__description-channelName" title={channelName}>
          {channelName}
        </span>
      </div>
    </div>
  );
}

export default SideVideo;




