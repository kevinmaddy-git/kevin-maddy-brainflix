import React from 'react';
import './HeroDetails.scss';
import ViewIcon from '../../assets/images/Icons/views.svg';
import LikeIcon from '../../assets/images/Icons/likes.svg';

function HeroDetails({ currentVideo }) {
  if (!currentVideo) {
    return null;
  }

  const date = new Date(currentVideo.timestamp);
  const timeConversion = date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <section className="heroDetails">
      <h1 className="heroDetails__title">{currentVideo.title}</h1>
      <div className="heroDetails__container">
        <div className="heroDetails-nameDate">
          <h4 className="heroDetails-nameDate__channelName">By {currentVideo.channel}</h4>
          <span className="heroDetails-nameDate__date">{timeConversion}</span>
        </div>
        <div className="heroDetails-info">
          <div className="heroDetails-info__views">
            <i className="heroDetails-info__views-icon">
              <img src={ViewIcon} alt="Views" />
            </i>
            <span className="heroDetails-info__views-count">{currentVideo.views}</span>
          </div>
          <div className="heroDetails-info__likes">
            <i className="heroDetails-info__likes-icon">
              <img src={LikeIcon} alt="Likes" />
            </i>
            <span className="heroDetails-info__likes-count">{currentVideo.likes}</span>
          </div>
        </div>
      </div>
      <div className="heroDetails__description">{currentVideo.description}</div>
      <h4 className="heroDetails__commentQuantity">
        {currentVideo.comments ? `${currentVideo.comments.length} Comments` : '0 Comments'}
      </h4>
    </section>
  );
}

export default HeroDetails;


