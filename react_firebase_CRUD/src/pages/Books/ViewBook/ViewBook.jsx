import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import BookService from '../../../services/book_services';
import Spinerpage from '../../Spinner/Spinner';

export default function ViewContact() {

    const [state, setState] = useState({
        loading: false,
        books: {},
        errorMessage: ''
    })

    const { bookId } = useParams()

    async function dataBuku() {

        try {
            setState({ ...state, loading: true })

            let response = await BookService.getBook(bookId)

            setState({
                ...state,
                loading: false,
                books: response.data()
            })

        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }

    useEffect(() => {
        dataBuku()
    }, [])

    return (
        <>
            {
                state.loading ? <Spinerpage /> : <div className='w-screen h-screen max-w-[400px] sm:max-w-[1020px]  mx-auto px-4'>
                    <div className='flex flex-col gap-2 pt-5 pb-4'>
                        <h2 className='text-2xl font-bold text-orange-300'>View Book</h2>

                        <p className='italic pt-3 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia possimus assumenda veritatis alias id dolorum nesciunt quisquam nemo? Dolores qui aperiam eaque saepe excepturi officia, sunt facere quibusdam dicta totam, cupiditate officiis distinctio voluptates sit adipisci veniam molestiae, reprehenderit aspernatur!</p>

                        <Box borderWidth='1px' borderRadius='lg'
                            className='flex flex-col sm:flex-row justify-center sm:justify-start gap-4 sm:gap-0 mt-5 items-start sm:items-center sm:p-8' >

                            <img src={state.books.link_gambar} alt="story of my life" className='w-[300px] h-[200px] object-cover mt-12 sm:mt-0 rounded-2xl' />

                            <div className='flex flex-col leading-10 text-md sm:mr-20'>

                                <p>Judul : <span className='italic'>{state.books.judul}</span></p>
                                <h1>Pengarang : <span className='font-bold'>{state.books.pengarang}</span></h1>
                                <span>Penerbit : {state.books.penerbit}</span>
                                <p>Harga : <span className='underline'>Rp {state.books.harga}</span></p>
                                <p>Ket : <span className='italic'>{state.books.ket}</span></p>
                            </div>
                        </Box>

                        <div>
                            <div className='font-bold mt-20'>Sinopsis : </div>
                            {state.books.sinopsis}
                        </div>

                        <Link to={'/'} ><Button bg="black" color="white">Back</Button></Link>

                    </div>

                </div>
            }

        </>
    );
}
