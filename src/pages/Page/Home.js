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
                api_key: 'c0f55fe1-f2c0-41cc-a4dc-aee73a1e899a'
            }
        });
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

