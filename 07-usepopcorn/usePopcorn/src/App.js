import { useEffect, useState } from "react";
import Box from "./components/Box";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import WatchedMovies from "./components/WatchedMovies";
import ErrorNote from "./components/ErrorNote";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./components/useMovies";

const KEY = "42a6905d";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  const { movies, isLoading, error } = useMovies(query, KEY);

  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatchedMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              handleSelectedMovie={handleSelectedMovie}
            />
          )}
          {error && <ErrorNote message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              KEY={KEY}
              watched={watched}
              selectedId={selectedId}
              handleCloseMovie={handleCloseMovie}
              handleAddWatchedMovie={handleAddWatchedMovie}
            />
          ) : (
            <WatchedMovies
              watched={watched}
              handleDeleteWatchedMovie={handleDeleteWatchedMovie}
            />
          )}
        </Box>
      </main>
    </>
  );
}
