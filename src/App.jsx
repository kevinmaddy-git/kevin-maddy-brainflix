import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Page/Home';
import VideoUploadPage from './pages/Page/VideoUploadPage';
import VideoPlayerPage from './pages/Page/VideoPlayerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<VideoUploadPage />} />
          <Route path="/video/:videoId" element={<VideoPlayerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



