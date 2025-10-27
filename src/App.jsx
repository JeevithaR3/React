import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

 const API_KEY = "thewdb";
 // 👈 Replace with your actual OMDb key

  // 🧠 When user clicks "Search"
  const handleSearchClick = async () => {
    if (!searchTerm) return alert("Please enter a movie name!");

    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search); // ✅ update movie list
    } else {
      setMovies([]); // ❌ if no results, clear
      alert("No movies found!");
    }
  };

  return (
    <div className="App">
      <h1>🎬 Movie Search App</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchClick={handleSearchClick}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
