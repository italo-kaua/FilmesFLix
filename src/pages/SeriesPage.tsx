import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import Series from "../components/Series";
import { buscarSeries } from "../services/api";
import { getFavoritos } from "../services/favorites";
import type { SerieProps } from "../types/series";

const SeriesPage = () => {
  const { search } = useOutletContext<{ search: string }>();

  const [series, setSeries] = useState<SerieProps[]>([]);
  const [, setFavoritos] = useState(() => getFavoritos());

  useEffect(() => {
    async function carregarSeries() {
      const data = await buscarSeries();
      setSeries(data);
    }

    carregarSeries();
  }, []);

  function atualizarFavoritos() {
    setFavoritos(getFavoritos());
  }

  const filteredSeries = series.filter((serie) =>
    serie.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Series
      series={filteredSeries}
      onFavoriteChange={atualizarFavoritos}
      title="Séries Populares"
    />
  );
};

export default SeriesPage;
