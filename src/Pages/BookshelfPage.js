// src/pages/BookshelfPage.js

import React from 'react';

const BookshelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">Here is your Personal Book Shelf : Enjoy :)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-700">{book.author_name?.join(', ')}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Search
      </button>
    </div>
  );
};

export default BookshelfPage;
