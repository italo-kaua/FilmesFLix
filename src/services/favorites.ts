import type { MovieProps } from "../types/movies";
import type { SerieProps } from "../types/series" 

const KEY = "favoritos";

type Favorito = MovieProps | SerieProps

export function getFavoritos(): Favorito[] {
    return JSON.parse(localStorage.getItem(KEY) || "[]" )
}

export function addFavorito(item: Favorito) {
 const favoritos = getFavoritos()
 localStorage.setItem(KEY, JSON.stringify([...favoritos, item]))
}

export function removeFavorito(id: number) {
    const favoritos = getFavoritos()
    .filter((movie) => movie.id !== id)
    localStorage.setItem(KEY, JSON.stringify(favoritos))
}

export function isFavorito(id: number): boolean {
 const favoritos = getFavoritos();

 return favoritos.some((movie) => movie.id === id)
}
