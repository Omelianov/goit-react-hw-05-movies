async function getMovieReviews(movieId) {
    const KEY = '2d0cc810611b68a053d01f920b18df6a';
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    const filter = `?api_key=${KEY}&language=en-US&page=1`;

    const response = await fetch(`${BASE_URL}${filter}`);
    const data = await response.json();

    return data;
}

export default getMovieReviews;