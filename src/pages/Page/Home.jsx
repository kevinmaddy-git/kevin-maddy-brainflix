import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Component/Navbar/Navbar';
import HeroVideo from '../../components/Component/HeroVideo/HeroVideo';
import HeroDetails from '../../components/Component/HeroDetails/HeroDetails';
import NewComment from '../../components/Component/NewComment/NewComment';
import CommentsSection from '../../components/Component/CommentsSection/CommentsSection';
import SideVideoList from '../../components/Component/SideVideo/SideVideoList';

const fetchVideoData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/videos');
    return response.data;
  } catch (error) {
    console.error('Error fetching video data:', error);
    return null;
  }
};

const fetchCurrentVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(`http://localhost:3000/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching current video details:', error);
    return null;
  }
};

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoData, setVideoData] = useState([]);

  const switchVideo = async (videoId) => {
    const selectedVideo = await fetchCurrentVideoDetails(videoId);
    setCurrentVideo(selectedVideo);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVideoData();

      if (data) {
        setVideoData(data);
        const currentVideoId = data[0].id;
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
    <>
      <Navbar />
      <HeroVideo currentVideo={currentVideo} />
      <HeroDetails currentVideo={currentVideo} />
      <NewComment currentVideo={currentVideo} />
      <CommentsSection currentVideo={currentVideo} />
      <SideVideoList
        currentVideoId={currentVideo.id}
        switchCurrentVideo={switchVideo}
        videoData={videoData}
      />
    </>
  );
};

export default Home;

