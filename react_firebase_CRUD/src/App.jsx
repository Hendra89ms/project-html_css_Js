import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ListBook, AddBook, EditBook, ViewBook } from './pages'

export default function App() {

  const [bookId, setBookId] = useState('')

  const getBookHandler = (id) => {

    setBookId(id)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'books/list'} />} />
        <Route path='/books/list' element={<ListBook getBookId={getBookHandler} />} />
        <Route path='/books/Add' element={<AddBook />} />
        <Route path='/books/edit/:bookId' element={<EditBook id={bookId} setBookId={setBookId} />} />
        <Route path='/books/view/:bookId' element={<ViewBook />} />

      </Routes>
    </>


  )
}
