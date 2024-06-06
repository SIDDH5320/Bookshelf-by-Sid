// src/components/BookCard.js

import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {
  return (
    <div className="border rounded-lg p-4 m-4 shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-700 mb-4">{book.author_name?.join(', ')}</p>
      <button
        onClick={() => addToBookshelf(book)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
