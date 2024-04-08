import { useSelectedMovie } from "../../contexts/useSelectedMovie";
import { ENUMS } from "../../utils/enums";

export default function MovieDetails() {

    const { selectedMovie, resetSelectedMovie } = useSelectedMovie();

    const handleClose = () => {
        resetSelectedMovie();
    };

    if (selectedMovie) { // le h-[calc(100%-4rem)] a refacto, le 4rem c'est la height du header
        return <div className="
            flex 
            flex-col 
            absolute
            bottom-0
            md:right-0
            h-3/4
            md:h-[calc(100vh-4rem)]
            w-full
            md:w-1/3
            p-2
            bg-red-500
            overflow-y-scroll
            ">

            <div className="flex w-full justify-between">
                <h2>{selectedMovie.title}</h2>
                <button onClick={handleClose}>close</button>
            </div>

            <p>Original title: {selectedMovie.originalTitle}</p>
            <p>{selectedMovie.releaseDate} - {selectedMovie.runtime}min</p>

            <img src={ENUMS.POSTER_PATH_BASE + selectedMovie.posterPath} />

            <p>
                {selectedMovie.overview}
            </p>
        </div>;
    }
}