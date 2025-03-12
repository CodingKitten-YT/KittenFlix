import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer';
import { getMovieEmbedUrl, getTVShowEmbedUrl } from '../api';

export const Watch = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  
  const embedUrl = type === 'movie'
    ? getMovieEmbedUrl(id!)
    : getTVShowEmbedUrl(id!);
  
  return (
    <div className="fixed inset-0 bg-black">
      <VideoPlayer src={embedUrl} />
    </div>
  );
};