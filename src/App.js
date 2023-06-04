import './App.css';
import Movie from './components/Movie'
import api from './api'

function App() {
  return (
    <div className="App">
      <h1>Netflix ListMovie with themoviedb API</h1>
      <Movie title="Netflix Original" url={api.fetchNetflixOriginals} />
      <Movie title="Trending Now" url={api.fetchTrending} />
      <Movie title="Top Rating" url={api.fetchTopRated} />
      <Movie title="Action Movie" url={api.fetchActionMoives} />
      <Movie title="Commedy Movie" url={api.fetchComedyMovies} />
      <Movie title="Horror Movie" url={api.fetchHorrorMovies} />
      <Movie title="Romance Movie" url={api.fetchRomanceMovies} />
      <Movie title="Documenter Movie" url={api.fetchDocumentaries} />

    </div>
  );
}

export default App;
