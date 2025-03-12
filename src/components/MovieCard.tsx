import React from 'react';
import { Play, Tv, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPosterUrl } from '../api';

interface MovieCardProps {
  id: string;
  title: string;
  type: 'movie' | 'tv';
  quality?: string;
  posterPath?: string;
  rating?: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({ 
  id, 
  title, 
  type, 
  quality, 
  posterPath,
  rating 
}) => {
  const posterUrl = posterPath ? getPosterUrl(posterPath) : null;

  return (
    <Link 
      to={`/${type}/${id}`} 
      className="group relative block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
    >
      <div className="aspect-[2/3] bg-gray-800 overflow-hidden">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {type === 'movie' ? (
              <Film className="w-12 h-12 text-gray-600" />
            ) : (
              <Tv className="w-12 h-12 text-gray-600" />
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex justify-between items-start">
              <span className="bg-purple-500/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                {type === 'movie' ? (
                  <>
                    <Film className="w-3 h-3" />
                    <span>Movie</span>
                  </>
                ) : (
                  <>
                    <Tv className="w-3 h-3" />
                    <span>TV Show</span>
                  </>
                )}
              </span>
              {rating && (
                <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded flex items-center gap-1">
                  ★ {rating.toFixed(1)}
                </span>
              )}
            </div>
            <div className="mt-auto">
              <div className="bg-black/60 backdrop-blur-sm p-3 -mx-4 -mb-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-purple-500" />
                  <span className="text-white font-medium text-sm truncate">
                    {title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};