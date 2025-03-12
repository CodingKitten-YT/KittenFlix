import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer';
import { getMovieEmbedUrl, getTVShowEmbedUrl, getMovieDetails } from '../api';
import { ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react';
import { TMDBMovie } from '../types';

export const Watch = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [movieDetails, setMovieDetails] = useState<TMDBMovie | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  
  const hideHeader = useCallback(() => {
    setHeaderVisible(false);
  }, []);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (type === 'movie' && id) {
        try {
          const details = await getMovieDetails(id);
          setMovieDetails(details);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      }
    };

    fetchMovieDetails();
  }, [type, id]);

  // Auto-hide header after 3 seconds
  useEffect(() => {
    if (headerVisible) {
      const timer = setTimeout(hideHeader, 3000);
      return () => clearTimeout(timer);
    }
  }, [headerVisible, hideHeader]);

  const embedUrl = type === 'movie' 
    ? getMovieEmbedUrl(id!) 
    : getTVShowEmbedUrl(id!);

  return (
    <div className="fixed inset-0 bg-black">
      <div 
        onMouseEnter={() => setHeaderVisible(true)}
        className="absolute top-0 left-0 right-0 h-16 z-20"
      />
      <div 
        className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm transition-all duration-300 ${
          headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </Link>
          {movieDetails && (
            <div className="text-white/80">
              <h1 className="text-lg font-medium">{movieDetails.title}</h1>
              {movieDetails.release_date && (
                <p className="text-sm opacity-75">
                  {new Date(movieDetails.release_date).getFullYear()}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      
      <button
        onClick={() => setHeaderVisible(!headerVisible)}
        className={`absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 ${
          headerVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {headerVisible ? (
          <ChevronUp className="w-5 h-5 text-white/80" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/80" />
        )}
      </button>
      
      <VideoPlayer src={embedUrl} />
    </div>
  );
};