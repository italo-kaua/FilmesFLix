import type { MovieProps } from "../types/movies";

const KEY = "favoritos";

export function getFavoritos(): MovieProps[] {
    return JSON.parse(localStorage.getItem(KEY) || "[]" )
}

export function addFavorito(movie: MovieProps) {
 const favoritos = getFavoritos()
 localStorage.setItem(KEY, JSON.stringify([...favoritos, movie]))
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
