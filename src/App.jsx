import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "4ceebb8a521d6489f66ba2f980848599";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMovies(data.results);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie App</h1>

      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default App;