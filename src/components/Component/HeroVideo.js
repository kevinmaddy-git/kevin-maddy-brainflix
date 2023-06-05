import React, { useRef, useEffect } from 'react';
// import play from '../../assets/images/Icons/play.svg';
// import scrub from '../../assets/images/Icons/scrub.svg';
// import fullScreen from '../../assets/images/Icons/fullscreen.svg';
// import volumeUp from '../../assets/images/Icons/volume_up.svg';
import './HeroVideo.scss';

function HeroVideo({ currentVideo }) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.load();
  }, [currentVideo]);

  const playVideo = () => {
    videoRef.current.play();
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <video className="hero__container-video" controls poster={currentVideo.image} ref={videoRef}>
          <source className="hero__container-video--source" src={`https://project-2-api.herokuapp.com/stream?api_key=f85cab0a-8fe1-4d2e-8b28-8cdfdec2bc3c`} />
        </video>
      </div>
    </section>
  );
}

export default HeroVideo;
