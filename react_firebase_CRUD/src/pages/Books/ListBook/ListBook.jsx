import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Button, Input, Box, IconButton } from '@chakra-ui/react'
import BookService from '../../../services/book_services';
import { Spinner } from '../../Spinner';
import { Footer } from '../../Footer';


export default function ListBook({ getBookId }) {

    const [state, setState] = useState({
        loading: false,
        books: [],
        errrorMessage: '',
        filteredBooks: []
    })

    async function getBooks() {
        try {
            setState({ ...state, loading: true })

            let data = []
            let response = await BookService.getAllBooks()

            response.docs.map(res => {
                return data.push({ ...res.data(), docId: res.id })
            })

            setState({
                ...state,
                loading: false,
                books: data,
                filteredBooks: data
            })

        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errrorMessage: error.message
            })
        }
    }

    // delete Books
    const handleDelete = async (bookId) => {
        try {
            setState({ ...state, loading: true })
            let response = await BookService.deleteBook(bookId)
            getBooks()
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errrorMessage: error.message
            })
        }
    }

    // search Books
    let searchBooks = (e) => {
        e.preventDefault()
        console.log(e.target.value)

        if (e.target.value.length < 1) {
            setState(prev => (
                prev = {
                    ...prev,
                    filteredBooks: state.books
                }
            ))
        }

        else {
            setState(prev => (
                prev = {
                    ...prev,
                    filteredBooks: state.filteredBooks.filter((x) => {

                        return x.judul.toLowerCase().includes(e.target.value.toLowerCase())
                    })
                }
            ))
        }


    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            {
                state.loading ? <Spinner /> : <div className='flex flex-col w-screen h-screen max-w-[1020px] mx-auto gap-8'>
                    <h2 className='text-md font-[800] px-3 pt-4 border-b-[1px] pb-2'>MY <span className='text-red-500'>BOOKS</span> <span className='text-green-700'>APPS</span></h2>

                    <div>
                        <h1 className='text-sm sm:text-lg pb-2  ml-4'>Add Your Favourite Book Here...</h1>
                        <Link to={'/books/Add'} className='bg-green-600 w-[60px] h-[25px] sm:h-[40px] sm:w-[80px] flex justify-center ml-4 items-center rounded-md cursor-pointer gap-1 text-white hover:bg-green-700 duration-300 text-sm sm:text-lg' >
                            <IoMdAddCircle className='text-[10px] sm:text-sm'></IoMdAddCircle> New </Link>
                    </div>
                    <p className='italic text-xs sm:text-[15px] flex px-5'>Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Officia possimus assumenda veritatis alias id dolorum nesciunt quisquam nemo? Dolores qui aperiam eaque saepe excepturi officia, sunt facere quibusdam dicta totam, cupiditate officiis distinctio voluptates sit adipisci veniam molestiae, reprehenderit aspernatur!</p>

                    <input
                        autoComplete='off'
                        onChange={searchBooks}
                        id='search'

                        className='py-5  w-[285px] md:w-[400px] pl-3 border-[1px] border-dotted border-blue-400 rounded-sm outline-1 outline-red-600  ml-5 h-2 flex items-center justify-center sm:w-[10px] '
                        placeholder='Search here'
                    >
                    </input>

                    <div className='flex flex-col items-center sm:flex-wrap sm:flex-row gap-16 sm:gap-6 max-w-[1020px]  '>
                        {
                            state.filteredBooks.map(book => {
                                return (

                                    <Box
                                        key={book.docId}
                                        borderWidth='1px' borderRadius='lg'
                                        className='max-w-[500px] flex flex-col sm:flex-row' >

                                        <img src={book.link_gambar} alt="story of my life" className='w-[200px] h-[200px] mx-2 object-cover rounded-2xl' />

                                        <div className='flex flex-col w-full'>
                                            <div className='flex justify-center p-2 gap-2 xl:justify-end '>
                                                <Link to={`/books/edit/${book.docId}`}>
                                                    <IconButton variant='outline'
                                                        bg='blue.600'
                                                        icon={<MdModeEditOutline size={18}></MdModeEditOutline>}
                                                        onClick={() => getBookId(book.docId)}
                                                    />
                                                </Link>

                                                <IconButton
                                                    variant='outline'
                                                    bg='red.500'
                                                    color='white'
                                                    icon={<AiFillDelete size={18}></AiFillDelete>}
                                                    onClick={() => { handleDelete(book.docId) }}
                                                />
                                            </div>

                                            <div className='flex flex-col justify-center leading-7   '>

                                                <p>Judul : <span
                                                    style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto', whiteSpace: 'normal!important' }}
                                                    className='italic capitalize '>{book.judul}</span></p>

                                                <h1>Pengarang : <span className='font-bold'>{book.pengarang}</span></h1>

                                                <span>Penerbit : {book.penerbit}</span>
                                                <p>Harga : <span className='underline'>Rp {book.harga}</span></p>

                                                <span>
                                                    Lihat Lebih lanjut...
                                                    <Button
                                                        colorScheme={"green"}>
                                                        <Link to={`/books/view/${book.docId}`}>
                                                            next
                                                        </Link>
                                                    </Button>
                                                </span>
                                            </div>
                                        </div>
                                    </Box>
                                )
                            })
                        }
                    </div>

                    <Footer />
                </div>
            }



        </>

    );
}
