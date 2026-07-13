export type MovieProps = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path: string | null;
  genre_ids: number[];
};

export type MoviesResponse = {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
};