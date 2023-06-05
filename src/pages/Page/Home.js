import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Component/Navbar';
import HeroVideo from '../../components/Component/HeroVideo';
import HeroDetails from '../../components/Component/HeroDetails';
import NewComment from '../../components/Component/NewComment';
import CommentsSection from '../../components/Component/CommentsSection';
import SideVideoList from '../../components/Component/SideVideoList';

const fetchVideoData = async () => {
    try {
        const response = await axios.get('https://project-2-api.herokuapp.com/videos', {
            params: {
                api_key: 'f85cab0a-8fe1-4d2e-8b28-8cdfdec2bc3c'
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
      const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=f85cab0a-8fe1-4d2e-8b28-8cdfdec2bc3c`);
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

