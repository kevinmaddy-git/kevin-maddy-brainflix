import React from 'react';
import Navbar from '../../components/Component/Navbar/Navbar';
import UploadVideo from '../../components/Component/UploadVideo/UploadVideo';
import Publish from '../../components/Component/Publish/Publish';

function VideoUploadPage() {
  return (
    <div className="video-upload-page">
      <Navbar />
      <UploadVideo />
      <Publish />
    </div>
  );
}

export default VideoUploadPage;

