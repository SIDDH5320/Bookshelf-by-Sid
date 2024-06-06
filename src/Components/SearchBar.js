// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for books..."
      className="w-full p-2 border rounded-lg mb-4"
    />
  );
};

export default SearchBar;
