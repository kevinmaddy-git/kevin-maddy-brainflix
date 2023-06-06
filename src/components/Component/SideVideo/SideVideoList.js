import React from 'react';
import './SideVideo.scss';
import SideVideo from './SideVideo';

function SideVideoList({ videoData, currentVideoId, switchCurrentVideo }) {
  return (
    <div className="sideVideoList">
      <h4 className="sideVideoList__header">NEXT VIDEOS</h4>
      <div className="sideVideoList__content">
        <div className="sideVideoList__heroDetails">
          {/* Render your HeroDetails component here */}
        </div>
        <div className="sideVideoList__videos">
          {videoData
            .filter((video) => video.id !== currentVideoId)
            .map((data) => (
              <SideVideo
                key={data.id}
                id={data.id}
                title={data.title}
                channelName={data.channel}
                image={data.image}
                switchCurrentVideo={switchCurrentVideo}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SideVideoList;
