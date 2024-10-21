import { useEffect, useState } from "react";
import Navbar from "./conponents/Navbar";
import Loader from "./conponents/Loader";
import MovieList from "./conponents/MovieList";
import WatchedMovies from "./conponents/WatchedMovies";

const KEY = "42a6905d";
const query = "frozen";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Error occurred when getting movies");
        const data = await res.json();
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar movies={movies} />
      <main className="main">
        {isLoading ? <Loader /> : <MovieList movies={movies} />}
        <WatchedMovies />
      </main>
    </>
  );
}
