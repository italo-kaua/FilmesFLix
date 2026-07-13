import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import Movies from "../components/Movies";
import { buscarFilmes } from "../services/api";
import { getFavoritos } from "../services/favorites";
import type { MovieProps } from "../types/movies";

const Home = () => {
  const { search } = useOutletContext<{ search: string }>();

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [, setFavoritos] = useState<MovieProps[]>(() => getFavoritos());

  useEffect(() => {
    async function carregarFilmes() {
      const data = await buscarFilmes();
      setMovies(data);
    }

    carregarFilmes();
  }, []);

  function atualizarFavoritos() {
    setFavoritos(getFavoritos());
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Movies
      movies={filteredMovies}
      onFavoriteChange={atualizarFavoritos}
      title="Últimos Lançamentos"
    />
  );
};

export default Home;
