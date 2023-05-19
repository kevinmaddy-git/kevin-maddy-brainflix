import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Navbar from './components/Component/Navbar';
import HeroVideo from './components/Component/HeroVideo';
import HeroDetails from './components/Component/HeroDetails';
import NewComment from './components/Component/NewComment';
import CommentsSection from './components/Component/CommentsSection';
import CurrentVideoDetails from './data/video-details.json';
import VideoData from './data/videos.json';

const fetchVideoData = async (apiKey) => {
  try {
    const response = await axios.get('https://project-2-api.herokuapp.com/videos', {
      params: {
        api_key: "kmbrainflix"
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching video data:', error);
    return null;
  }
};

function App() {
  const [currentVideo, setCurrentVideo] = useState(CurrentVideoDetails[0]);

  const switchVideo = (id) => {
    const selectedVideo = CurrentVideoDetails.find((video) => video.id === id);
    setCurrentVideo(selectedVideo);
  };

  return (
    <div className="App">
      <Navbar />
      <HeroVideo currentVideo={currentVideo} />
      <HeroDetails currentVideo={currentVideo} />
      <NewComment currentVideo={currentVideo} />
      <CommentsSection currentVideo={currentVideo} />
    </div>
  );
}

export default App;

