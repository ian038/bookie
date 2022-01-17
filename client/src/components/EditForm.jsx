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
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                            type="text"
                            onChange={handleChange('title')}
                            value={title}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">Author</label>
                            <input
                            type="text"
                            onChange={handleChange('author')}
                            value={author}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">Genre</label>
                            <input
                            type="text"
                            onChange={handleChange('genre')}
                            value={genre}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded">Update Book</button>
            </div>
        </form>
    )
}

export default EditForm
