import { MovieLite } from "./Movie";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

export default function MovieList({ movieList }: { movieList: MovieLite[] }) {

    return <div className="flex">
        <div className="flex flex-col items-center bg-blue-500 h-[calc(100vh-4rem)] w-full overflow-y-scroll">
            <h1>Movie List</h1>

            {
                movieList.length === 0 ?
                    <EmptyView /> :

                    <div className="flex flex-row flex-wrap justify-center gap-4">
                        {
                            movieList.map((movie: MovieLite) => {
                                return <MovieCard movie={movie} key={movie.id} />
                            })
                        }
                    </div>
            }
        </div>
        <MovieDetails />
    </div>;
}

function EmptyView() {
    // TODO: Peut etre trouver une image plus mignonne...
    return <img src="https://i.pinimg.com/564x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg" alt="Empty view" />
}