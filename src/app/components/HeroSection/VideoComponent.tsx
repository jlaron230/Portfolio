"use client";
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
          preload="none"
      >
        <source src="/videos/video_optimized.mp4" type="video/mp4"/>
        <source src="/videos/video_optimized.webm" type="video/webm"/>
        Vidéo futuristique en perspective
      </video>
  );
};

export default VideoComponent;
