import { useState } from 'react';
import { TMDBMovie, TMDBTVShow } from '../types';
import { MovieCard } from '../components/MovieCard';
import { SearchBar } from '../components/SearchBar';
import { Search } from 'lucide-react';

export const Home = () => {
  const [results, setResults] = useState<(TMDBMovie | TMDBTVShow)[]>([]);

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-20 flex-grow">
        <header className="flex flex-col items-center gap-12 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Watch your movies/shows on
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient">
              KittenFlix
            </span>
          </h1>
          <SearchBar onSearchResults={setResults} />
        </header>

        <main>
          {results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {results.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MovieCard
                    id={item.id.toString()}
                    title={'title' in item ? item.title : item.name}
                    type={'title' in item ? 'movie' : 'tv'}
                    posterPath={item.poster_path}
                    rating={item.vote_average}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-6 mt-12">
              <Search className="w-16 h-16 text-purple-400/50" />
              <p className="text-gray-400 text-lg">
                Start typing to search for movies and TV shows
              </p>
            </div>
          )}
        </main>
      </div>

      <footer className="w-full text-center py-4 text-gray-400">
        <div className="flex justify-center gap-4">
          <a href="/legal" className="hover:underline">
            Legal
          </a>{' '}
          ·
          <a href="https://github.com/CodingKitten-YT/KittenFlix" className="hover:underline">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};
