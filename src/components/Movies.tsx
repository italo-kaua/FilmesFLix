import type { MovieProps } from "../types/movies";

import { addFavorito, removeFavorito, isFavorito } from "../services/favorites";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./Movies.css";

type Props = {
  movies: MovieProps[];
  title: string;
  onFavoriteChange?: () => void;
};

const Movies = ({ movies, title, onFavoriteChange }: Props) => {
  const toggleFavorito = (movie: MovieProps) => {
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
                  alt={movie.title}
                />

                <div className="overlay">
                  <p>{movie.overview}</p>
                </div>
              </div>

              <h2>{movie.title}</h2>
              <span>{movie.release_date.slice(0, 4)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;
