import React from 'react'

const Book = ({ book, onRemoveBook, editBook }) => {
    return (
        <div key={book.id}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded" onClick={() => editBook(book.id)}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded" onClick={() => onRemoveBook(book.id)}>Delete</button>
        </div>
    )
}

export default Book
