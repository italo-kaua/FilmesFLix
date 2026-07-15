import type { MovieProps } from "../types/movies";
import type { SerieProps } from "../types/series";

import { addFavorito, removeFavorito, isFavorito } from "../services/favorites";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./Movies.css";

type Favorito = MovieProps | SerieProps;

type Props = {
  movies: Favorito[];
  title: string;
  onFavoriteChange?: () => void;
};

const Movies = ({ movies, title, onFavoriteChange }: Props) => {
  const toggleFavorito = (movie: Favorito) => {
    if (isFavorito(movie.id)) {
      removeFavorito(movie.id);
    } else {
      addFavorito(movie);
    }

    onFavoriteChange?.();
  };

  return (
    <section className="secao-filmes">
      <div className="container">
        <h1>{title}</h1>

        <div className="filmes">
          {movies.map((movie) => (
            <div key={movie.id} className="filmes-card">
              <div className="img-container">
                <button
                  className="favorite-btn"
                  onClick={() => toggleFavorito(movie)}
                >
                  {isFavorito(movie.id) ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart color="white" />
                  )}
                </button>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={"title" in movie ? movie.title : movie.name}
                />

                <div className="overlay">
                  <p>{movie.overview}</p>
                </div>
              </div>

              <h2>{"title" in movie ? movie.title : movie.name}</h2>

              <span>
                {("release_date" in movie
                  ? movie.release_date
                  : movie.first_air_date
                ).slice(0, 4)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;
