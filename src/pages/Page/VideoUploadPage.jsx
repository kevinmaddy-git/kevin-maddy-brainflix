import React from 'react';
import Navbar from '../../components/Component/Navbar/Navbar';
import UploadVideo from '../../components/Component/UploadVideo/UploadVideo';

function VideoUploadPage() {
  return (
    <div className="video-upload-page">
      <Navbar />
      <UploadVideo />
    </div>
  );
}

export default VideoUploadPage;

