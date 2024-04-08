import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { MovieLite } from "./components/Movie/Movie";
import MovieList from "./components/Movie/MovieList";
import { SelectedMovieContextProvider } from "./contexts/useSelectedMovie";
import { getPopularMovies, searchMovie } from "./services/apiService";

export default function App() {

  const [movieList, setMovieList] = useState<MovieLite[]>([]);

  useEffect(() => {

    getPopularMovies().then((movies) => {
      setMovieList(movies);
    });

  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search: string = (e.target.value as string).trim();

    if (search.length === 0) {
      getPopularMovies().then((movies) => {
        setMovieList(movies);
      });
    } else {
      searchMovie(search).then((movies) => {
        setMovieList(movies);
      })
    }
  }

  return <div className="flex flex-col h-full">
    <SelectedMovieContextProvider>
      <Header handleSearch={handleSearch} />

      <MovieList movieList={movieList} />

    </SelectedMovieContextProvider>
  </div>;
}
