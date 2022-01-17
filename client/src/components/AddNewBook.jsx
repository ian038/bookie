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
                            required
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">Author</label>
                            <input
                            type="text"
                            onChange={handleChange('author')}
                            value={author}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">Genre</label>
                            <input
                            type="text"
                            onChange={handleChange('genre')}
                            value={genre}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6">
                <button className="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded">Add Book</button>
            </div>
        </form>
    )
}
