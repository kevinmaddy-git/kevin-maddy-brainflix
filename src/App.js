import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Navbar from './components/Component/Navbar';
import HeroVideo from './components/Component/HeroVideo';
import HeroDetails from './components/Component/HeroDetails';
import NewComment from './components/Component/NewComment';
import CommentsSection from './components/Component/CommentsSection';
import SideVideoList from './components/Component/SideVideoList';
import CurrentVideoDetails from './data/video-details.json';
import VideoData from './data/videos.json';

const fetchVideoData = async () => {
  try {
    const response = await axios.get('https://project-2-api.herokuapp.com/videos', {
      params: {
        api_key: 'kmbrainflix'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching video data:', error);
    return null;
  }
};

const fetchCurrentVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}`, {
      params: {
        api_key: 'kmbrainflix'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current video details:', error);
    return null;
  }
};

function App() {
  const [currentVideo, setCurrentVideo] = useState(null);

  const switchVideo = async (videoId) => {
    const selectedVideo = await fetchCurrentVideoDetails(videoId);
    setCurrentVideo(selectedVideo);
  };

  useEffect(() => {
    const fetchData = async () => {
      const videoData = await fetchVideoData();

      if (videoData) {
        const currentVideoId = videoData[0].id;
        const currentVideoDetails = await fetchCurrentVideoDetails(currentVideoId);

        if (currentVideoDetails) {
          setCurrentVideo(currentVideoDetails);
        }
      }
    };

    fetchData();
  }, []);

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <HeroVideo currentVideo={currentVideo} />
      <HeroDetails currentVideo={currentVideo} />
      <NewComment currentVideo={currentVideo} />
      <CommentsSection currentVideo={currentVideo} />
      <SideVideoList
        currentVideoId={currentVideo.id}
        switchCurrentVideo={switchVideo}
        videoData={VideoData}
      />
    </div>
  );
}

export default App;


