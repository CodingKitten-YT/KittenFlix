import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { searchMovies, searchTVShows } from '../api';
import { TMDBMovie, TMDBTVShow } from '../types';

interface SearchBarProps {
  onSearchResults: (results: (TMDBMovie | TMDBTVShow)[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length >= 2) {
        setLoading(true);
        try {
          const [movieResponse, tvResponse] = await Promise.all([
            searchMovies(query),
            searchTVShows(query)
          ]);
          
          const combinedResults = [
            ...movieResponse.results,
            ...tvResponse.results
          ].sort((a, b) => b.popularity - a.popularity);
          
          onSearchResults(combinedResults);
        } catch (error) {
          console.error('Search error:', error);
        } finally {
          setLoading(false);
        }
      } else {
        onSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query, onSearchResults]);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies and TV shows..."
          className="w-full bg-white/5 text-white rounded-2xl px-14 py-6 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 backdrop-blur-xl text-lg placeholder:text-gray-400"
        />
        <div className="absolute inset-y-0 left-5 flex items-center">
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-purple-500 border-t-transparent" />
          ) : (
            <Search className="w-6 h-6 text-purple-400" />
          )}
        </div>
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-5 flex items-center"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
          </button>
        )}
      </div>
    </div>
  );
};