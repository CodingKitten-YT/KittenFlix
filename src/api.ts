import axios from 'axios';
import { MovieResponse, TVShowResponse, TMDBResponse } from './types';

const BASE_URL = 'https://vidsrc.xyz';
const TMDB_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODk5NDlkNDEzMWM3MTdiNGNlNWY1YjViYjlmZmJlZCIsIm5iZiI6MTcwMTAwMTM0NC40NTYsInN1YiI6IjY1NjMzODgwNzA2ZTU2MDBjNGJiOTA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oE7CqxBBS8w9vooBkzD9nNfIcheHzVlgVe-x1Qzh1Ls';
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p';

const tmdbAxios = axios.create({
  baseURL: TMDB_URL,
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
    accept: 'application/json',
  },
});

export const getPopularMovies = async (page: number = 1): Promise<TMDBResponse> => {
  const response = await tmdbAxios.get('/movie/popular', {
    params: {
      language: 'en-US',
      page,
    },
  });
  return response.data;
};

export const getPopularTVShows = async (page: number = 1): Promise<TMDBResponse> => {
  const response = await tmdbAxios.get('/tv/popular', {
    params: {
      language: 'en-US',
      page,
    },
  });
  return response.data;
};

export const getMovieEmbedUrl = (imdbId: string) => {
  return `${BASE_URL}/embed/movie/${imdbId}`;
};

export const getTVShowEmbedUrl = (imdbId: string) => {
  return `${BASE_URL}/embed/tv/${imdbId}`;
};

export const searchMovies = async (query: string): Promise<TMDBResponse> => {
  const response = await tmdbAxios.get('/search/movie', {
    params: {
      query,
      language: 'en-US',
      include_adult: false,
    },
  });
  return response.data;
};

export const searchTVShows = async (query: string): Promise<TMDBResponse> => {
  const response = await tmdbAxios.get('/search/tv', {
    params: {
      query,
      language: 'en-US',
      include_adult: false,
    },
  });
  return response.data;
};

export const getPosterUrl = (path: string, size: 'w500' | 'original' = 'w500') => {
  return path ? `${TMDB_IMAGE_URL}/${size}${path}` : null;
};

export const getMovieDetails = async (tmdbId: string) => {
  const response = await tmdbAxios.get(`/movie/${tmdbId}`);
  return response.data;
};

export const getTVShowDetails = async (tmdbId: string) => {
  const response = await tmdbAxios.get(`/tv/${tmdbId}`);
  return response.data;
};