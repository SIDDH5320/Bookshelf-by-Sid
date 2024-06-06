// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './Pages/BookSearchPage';
import BookshelfPage from './Pages/BookshelfPage';
import './index.css';

function App() {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearchPage addToBookshelf={addToBookshelf} />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </Router>
  );
}

export default App;
