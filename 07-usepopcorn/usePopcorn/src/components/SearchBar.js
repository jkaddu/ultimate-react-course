import { useEffect, useRef } from "react";
export default function SearchBar({ query, setQuery }) {
  // The React way of selecting and using a DOM element
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();

    function enterKeyCallBack(e) {
      if (e.code === "Enter") {
        inputEl.current.focus();
      }
    }
    document.addEventListener("keydown", enterKeyCallBack);
    return document.addEventListener("keydiwn", enterKeyCallBack);
  }, []);

  // Older way aka javaScript way of selecting and using a DOM element
  // useEffect(function () {
  //   const el = document.querySelector(".search");
  //   console.log(el);
  //   el.focus();
  // }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
