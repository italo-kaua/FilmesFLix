import type { SerieProps } from "../types/series";

import { addFavorito, removeFavorito, isFavorito } from "../services/favorites";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./Movies.css";

type Props = {
  series: SerieProps[];
  title: string;
  onFavoriteChange?: () => void;
};

const Series = ({ series, title, onFavoriteChange }: Props) => {
  const toggleFavorito = (serie: SerieProps) => {
    if (isFavorito(serie.id)) {
      removeFavorito(serie.id);
    } else {
      addFavorito(serie);
    }

    onFavoriteChange?.();
  };

  return (
    <section className="secao-filmes">
      <div className="container">
        <h1>{title}</h1>

        <div className="filmes">
          {series.map((serie) => (
            <div key={serie.id} className="filmes-card">
              <div className="img-container">
                <button
                  className="favorite-btn"
                  onClick={() => toggleFavorito(serie)}
                >
                  {isFavorito(serie.id) ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart color="white" />
                  )}
                </button>

                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                />

                <div className="overlay">
                  <p>{serie.overview}</p>
                </div>
              </div>

              <h2>{serie.name}</h2>
              <span>{serie.first_air_date.slice(0, 4)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Series;
