import React from "react";

const VideoComponent = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-background"
      width="100%"
      height="auto"
    >
      <source src="/videos/vecteezy_futuristic-threshold-with-reflections-on-wall-and-floor_2016010.mov" type="video/mp4" />
        Vidéo futuristique en perspective
    </video>
  );
};

export default VideoComponent;
