import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Component/Navbar";
import HeroVideo from "./components/Component/HeroVideo"
import CurrentVideoDetails from './data/video-details.json';
import VideoData from './data/videos.json'

function App() {
  const[videoData, setVideoData] = useState(VideoData)
  const [currentVideo, setCurrentVideo] = useState(CurrentVideoDetails[0])

  const switchVideo = (id) => {
    const selectedVideo = CurrentVideoDetails.find((video) => {
      return video.id === id;
    })
    setCurrentVideo(selectedVideo);
  }
  return (
    <div className="App">
      <Navbar />
      <HeroVideo currentVideo={currentVideo} />
    </div>
  );
}

export default App;