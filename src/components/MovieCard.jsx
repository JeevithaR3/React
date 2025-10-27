import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        borderRadius: "12px",
        padding: "1rem",
        width: "200px",
        margin: "10px auto",
        color: "white",
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
