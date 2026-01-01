"use client";

import { useState, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
}

export default function VideoPlayer({
  src,
  className = "",
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
  poster,
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded to true after a short delay to ensure video is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <video
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        poster={poster}
        className="w-full h-full object-cover"
        onLoadedData={() => setIsLoaded(true)}
        onCanPlay={() => setIsLoaded(true)}
        onLoadStart={() => setIsLoaded(false)}
        playsInline
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>

      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Loading video...</div>
        </div>
      )}
    </div>
  );
}
