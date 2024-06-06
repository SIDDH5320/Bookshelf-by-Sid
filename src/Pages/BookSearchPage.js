// src/pages/BookSearchPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import BookCard from '../Components/BookCard';

const BookSearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }, [query]);

  return (
<>
<h1 className='text-white text-center'>Book Shelf - Library</h1>
    <div className="container mx-auto p-4">
      
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
      <button
        onClick={() => window.location.href = '/bookshelf'}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Go to My Bookshelf
      </button>
    </div>
    </>
  );
};

export default BookSearchPage;
