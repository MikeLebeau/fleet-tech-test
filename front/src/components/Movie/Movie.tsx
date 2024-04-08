export type Movie = {
    id: string;
    title: string;
    originalTitle: string;
    overview: string;
    posterPath: string;
    budget: number;
    revenue: number;
    releaseDate: string;
    runtime: number;
}

export type MovieLite = Pick<Movie, 'id' | 'title' | 'posterPath'>