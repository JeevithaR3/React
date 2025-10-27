import React from "react";

function SearchBar({ searchTerm, onSearchChange, onSearchClick }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid #38bdf8",
          marginRight: "10px",
        }}
      />
      <button
        onClick={onSearchClick}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#38bdf8",
          color: "white",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
