const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// API: The Movie Database (TMDB)

export async function  buscarFilmes() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`);

    const data = await response.json()

    return data.results
}

export async function buscarSeries() {
    const response = await fetch( `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR`);
    
    const data = await response.json()

    return data.results

}