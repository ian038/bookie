import React from 'react'

export const AddNewBook = ({ onNewBook, info, setInfo }) => {
    const { title, author, genre } = info

    const handleChange = name => e => {
        e.preventDefault()
        setInfo({ ...info, [name]: e.target.value })
    }
 
    const submit = e => {
        e.preventDefault()
        onNewBook(title, author, genre)
    }

    return (
        <form onSubmit={submit}>
            <input
            type="text"
            placeholder="Title"
            onChange={handleChange('title')}
            value={title}
            required
            />
            <input
            type="text"
            placeholder="Author"
            onChange={handleChange('author')}
            value={author}
            required
            />
            <input
            type="text"
            placeholder="Genre"
            onChange={handleChange('genre')}
            value={genre}
            required
            />
            <button>Add Book</button>
        </form>
    )
}
