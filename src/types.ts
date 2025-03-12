export interface Movie {
  imdb_id: string;
  tmdb_id: string;
  title: string;
  embed_url: string;
  embed_url_tmdb: string;
  quality: string;
}

export interface MovieResponse {
  result: Movie[];
  pages: number;
}

export interface TVShow {
  imdb_id: string;
  tmdb_id: string;
  title: string;
  embed_url: string;
  embed_url_tmdb: string;
  quality: string;
}

export interface TVShowResponse {
  result: TVShow[];
  pages: number;
}

export interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
}

export interface TMDBTVShow {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
  popularity: number;
}

export interface TMDBResponse {
  page: number;
  results: (TMDBMovie | TMDBTVShow)[];
  total_pages: number;
  total_results: number;
}

export type MediaType = 'movie' | 'tv';