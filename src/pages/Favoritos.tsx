import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { getFavoritos } from "../services/favorites";
import type { MovieProps } from "../types/movies";
import type { SerieProps } from "../types/series";

import Movies from "../components/Movies";

const Favoritos = () => {
  const { search } = useOutletContext<{ search: string }>();

  const [favoritos, setFavoritos] = useState<(MovieProps | SerieProps)[]>(() =>
    getFavoritos(),
  );

  const filteredMovies = favoritos.filter((item) =>
    (("title" in item ? item.title : item.name) ?? "")
      .toLowerCase()
      .includes(search.toLowerCase()),
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
