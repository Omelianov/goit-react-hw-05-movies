async function getSearchMovies(query, page = 1) {
    const KEY = '2d0cc810611b68a053d01f920b18df6a';
    const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
    const filter = `?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&${page}`;

    const response = await fetch(`${BASE_URL}${filter}`);
    const data = await response.json();

    return data;

}
console.log(getSearchMovies())
export default getSearchMovies;