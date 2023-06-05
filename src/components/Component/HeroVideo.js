import React from 'react';
import './HeroVideo.scss';
// import play from '../../assets/images/Icons/play.svg';
// import scrub from '../../assets/images/Icons/scrub.svg';
// import fullScreen from '../../assets/images/Icons/fullscreen.svg';
// import volumeUp from '../../assets/images/Icons/volume_up.svg';

function HeroVideo({ currentVideo }) {
    return (
        <section className="hero">
            <div className="hero__container">
                <video className="hero__container-video" controls poster={currentVideo.image}>
                    <source className="hero__container-video--source" src={currentVideo.video}></source>
                </video>
            </div>
        </section>
    );
}

export default HeroVideo;
