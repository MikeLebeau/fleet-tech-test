import { MovieLite } from "./Movie";
import { useSelectedMovie } from "../../contexts/useSelectedMovie";
import { ENUMS } from "../../utils/enums";

export default function MovieCard({ movie }: { movie: MovieLite }) {

    const { handleChooseMovie } = useSelectedMovie();

    return <div
        className="
            flex 
            flex-col 
            gap-2 
            bg-green-300 
            w-36
            h-64
            items-center 
            cursor-pointer 
            pb-2"
        onClick={() => handleChooseMovie(movie.id)}
    >
        <img src={ENUMS.POSTER_PATH_BASE + movie.posterPath} className="object-cover" loading="lazy" />
        <h2 className="
            w-full 
            text-center 
            whitespace-nowrap
            hover:whitespace-normal
            text-ellipsis 
            overflow-hidden 
            hover:overflow-visible 
            ">{movie.title}</h2>
    </div>;
}