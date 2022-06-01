import React, { useRef, useState } from "react";

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video width="800" ref={videoRef} onClick={handlePlay}>
        <source src="videos/planeta.mp4" type="video/mp4"></source>
      </video>
      <br />
      <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;
