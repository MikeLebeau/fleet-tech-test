import { createContext, useContext, useState } from "react";
import { Movie } from "../components/Movie/Movie";
import { getMovieDetail } from "../services/apiService";

type SelectedMovieContextType = {
    selectedMovie: Movie | undefined;
    handleChooseMovie: Function;
    resetSelectedMovie: Function;
}

const SelectedMovieContext = createContext<SelectedMovieContextType>({
    selectedMovie: undefined,
    handleChooseMovie: () => { },
    resetSelectedMovie: () => { },
});

export function useSelectedMovie() {
    return useContext(SelectedMovieContext);
}

export function SelectedMovieContextProvider({ children }: { children: string | JSX.Element | JSX.Element[] }) {
    const [selectedMovie, setSelectedMovie] = useState<Movie>();

    const handleChooseMovie = (movieId: string) => {
        getMovieDetail(movieId).then((newMovie) => {
            setSelectedMovie(newMovie);
        })
    }

    const resetSelectedMovie = () => {
        setSelectedMovie(undefined);
    }

    return <SelectedMovieContext.Provider value={{ selectedMovie, handleChooseMovie, resetSelectedMovie }}>
        {children}
    </SelectedMovieContext.Provider>
}