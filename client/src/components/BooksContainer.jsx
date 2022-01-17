import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
import { AddNewBook } from './AddNewBook'
import EditForm from './EditForm'

export const BooksContainer = () => {
    const [books, setBooks] = useState([])
    const [editId, setEditId] = useState(null)
    const [info, setInfo] = useState({
        title: '',
        author: '',
        genre: ''
    })

    const getBooks = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/books')
            setBooks(res.data)
        } catch(error) {
            alert('GET ERROR')
            console.log('Get Error: ' + error)
        }
    }

    const addBook = async(title, author, genre) => {
        try {
            const res = await axios.post("http://localhost:5000/api/v1/books", { book: { title, author, genre } })
            if(res.data) {
                setInfo({ ...info, title: '', author: '', genre: '' })
                getBooks()
            }
        } catch(error) {
            alert('ADD ERROR')
            console.log('Add Book Error: ' + error)
        }
    }

    const removeBook = async bookId => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/v1/books/${bookId}`)
            if(res) {
                getBooks()
            }
        } catch(error) {
            alert('DELETE ERROR')
            console.log('Delete Error: ' + error)
        }
    }

    const editBook = bookId => {
        setEditId(bookId)
    }

    const update = async(id, title, author, genre) => {
        try {   
            const res = await axios.put(`http://localhost:5000/api/v1/books/${id}`, { book: { title, author, genre } })
            if(res.data) {
                setEditId(null)
                getBooks()
            }
        } catch(error) {
            alert('UPDATE ERROR')
            console.log('Update Error: ' + error)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div className="container mx-auto py-32">
            Books
            {books.map((book) => 
                editId === book.id ? <EditForm book={book} key={book.id} update={update} /> :
                <Book book={book} key={book.id} onRemoveBook={removeBook} editBook={editBook} />
            )}
            <AddNewBook onNewBook={addBook} info={info} setInfo={setInfo} />
        </div>
    )
}
