const API_KEY = '2d607e0e0846093633f45cc85001abef';


// semua Endpoint
const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMoives: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`
    
}

export default request