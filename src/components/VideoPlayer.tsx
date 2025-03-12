import React from 'react';

interface VideoPlayerProps {
  src: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="w-full h-screen">
      <iframe
        src={src}
        className="w-full h-full border-0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};