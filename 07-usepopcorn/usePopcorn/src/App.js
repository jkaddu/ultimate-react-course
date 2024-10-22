import { useEffect, useState } from "react";
import Box from "./components/Box";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import WatchedMovies from "./components/WatchedMovies";
import ErrorNote from "./components/ErrorNote";

const KEY = "42a6905d";
// const query = "frozen";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok) throw new Error("Error occurred when getting movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found.");
          setMovies(data.Search);
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorNote message={error} />}
        </Box>
        <Box>
          <WatchedMovies />
        </Box>
      </main>
    </>
  );
}
