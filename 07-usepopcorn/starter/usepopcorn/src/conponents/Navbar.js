import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}
