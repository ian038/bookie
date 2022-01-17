import React, { useState } from 'react'

const EditForm = ({ book, update }) => {
    const [info, setInfo] = useState({
        id: book.id,
        title: book.title,
        author: book.author,
        genre: book.genre
    })
    const { id, title, author, genre } = info

    const handleChange = name => e => {
        setInfo({ ...info, [name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        update(id, title, author, genre)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleChange('title')}
            />
            <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={handleChange('author')}
            />
            <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={handleChange('genre')}
            />
            <button>Update Book</button>
        </form>
    )
}

export default EditForm
