async function getMovieCredits(movieId) {
    const KEY = '2d0cc810611b68a053d01f920b18df6a';
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const filter = `?api_key=${KEY}&language=en-US`;

    const response = await fetch(`${BASE_URL}${filter}`);
    const data = await response.json();

    return data;
}

export default getMovieCredits;