import { useEffect, useState } from 'react';
import { getPopularMovies, getPopularTVShows } from '../api';
import { TMDBMovie, TMDBTVShow } from '../types';
import { MovieCard } from '../components/MovieCard';
import { Film, Tv } from 'lucide-react';

export const Discover = () => {
  const [movies, setMovies] = useState<TMDBMovie[]>([]);
  const [tvShows, setTvShows] = useState<TMDBTVShow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [moviesData, tvShowsData] = await Promise.all([
          getPopularMovies(),
          getPopularTVShows()
        ]);
        setMovies(moviesData.results as TMDBMovie[]);
        setTvShows(tvShowsData.results as TMDBTVShow[]);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Film className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl font-bold">Trending Movies</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MovieCard
                id={movie.id.toString()}
                title={movie.title}
                type="movie"
                posterPath={movie.poster_path}
                rating={movie.vote_average}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-8">
          <Tv className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl font-bold">Popular TV Shows</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {tvShows.map((show, index) => (
            <div
              key={show.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MovieCard
                id={show.id.toString()}
                title={show.name}
                type="tv"
                posterPath={show.poster_path}
                rating={show.vote_average}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};