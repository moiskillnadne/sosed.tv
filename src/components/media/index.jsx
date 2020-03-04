import React from 'react';

// Components
import VideoplayerList from './videoplayerList';

const VideoContainer = () => {
  return (
    <div className="video-container">

      <VideoplayerList />

      <div className="videoplayer">
        <video>
          <source src="https://www.youtube.com/watch?v=5qap5aO4i9A" type="video/mp4"/>
        </video>
      </div>

    </div>
  );
};


export default VideoContainer;