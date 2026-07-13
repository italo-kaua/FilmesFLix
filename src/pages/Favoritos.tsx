import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { getFavoritos } from "../services/favorites";
import type { MovieProps } from "../types/movies";

import Movies from "../components/Movies";

const Favoritos = () => {
  const { search } = useOutletContext<{ search: string }>();

  const [favoritos, setFavoritos] = useState<MovieProps[]>(() =>
    getFavoritos(),
  );

  const filteredMovies = favoritos.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Movies
      movies={filteredMovies}
      onFavoriteChange={() => setFavoritos(getFavoritos())}
      title="Filmes Favoritos"
    />
  );
};

export default Favoritos;
