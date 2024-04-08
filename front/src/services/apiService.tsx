import axios, { AxiosRequestConfig } from "axios";
import { Movie, MovieLite } from "../components/Movie/Movie";

const BASE_URL = "https://api.themoviedb.org/3";

const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        "Accept": "application/json"
    }
});

export async function getPopularMovies(): Promise<MovieLite[]> {
    return await httpClient.get('/movie/popular')
        .then((response) => {
            const newMovieList: MovieLite[] = response.data.results.map((res: { id: string; title: string; poster_path: string }) => {// TODO: Peut etre faire des types pour ce que je recupe de l'API
                return {
                    id: res.id,
                    title: res.title,
                    posterPath: res.poster_path
                }
            });

            return newMovieList;
        })
        .catch(() => { // TODO: Preciser plus que juste "ca marche pas"
            console.error('Oups... Something went wrong');
            return [];
        });
}

export async function searchMovie(search: string): Promise<MovieLite[]> {
    const config: AxiosRequestConfig = {
        params: {
            'query': search
        }
    }

    return await httpClient.get('/search/movie', config)
        .then((response) => {
            const newMovieList: MovieLite[] = response.data.results.map((res: { id: string; title: string; poster_path: string }) => {// TODO: Peut etre faire des types pour ce que je recupe de l'API
                return {
                    id: res.id,
                    title: res.title,
                    posterPath: res.poster_path
                }
            });

            return newMovieList;
        })
        .catch(() => { // TODO: Preciser plus que juste "ca marche pas"
            console.error('Oups... Something went wrong');
            return [];
        });
}

export async function getMovieDetail(id: string): Promise<Movie> {
    return await httpClient.get(`/movie/${id}`)
        .then((response) => {
            return {
                id: response.data.id,
                title: response.data.title,
                originalTitle: response.data.original_title,
                overview: response.data.overview,
                posterPath: response.data.poster_path,
                budget: response.data.budget,
                revenue: response.data.revenue,
                releaseDate: response.data.release_date,
                runtime: response.data.runtime,
            }
        })
        .catch(() => { // TODO: Preciser plus que juste "ca marche pas"
            console.error('Oups... Something went wrong');
            return Promise.reject('Oups... Something went wrong');
        });
}