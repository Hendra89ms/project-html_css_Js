import React from 'react';
import { Stack, Input, Select, Button, Textarea } from '@chakra-ui/react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookService from '../../../services/book_services';

export default function EditBook({ id, setBookId }) {

    const navigate = useNavigate()

    const { bookId } = useParams();

    let [state, setState] = useState({
        loading: false,
        book: {
            judul: '',
            pengarang: '',
            link_gambar: '',
            penerbit: '',
            harga: '',
            ket: '',
            sinopsis: '',
        },
        errorMessage: ''
    })

    const editHandler = async () => {
        try {
            const docSnap = await BookService.getBook(id)

            setState({
                ...state,
                loading: false,
                book: docSnap.data()
            })

        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
        }
    }

    let updateInput = (e) => {
        setState({
            ...state,
            book: {
                ...state.book,
                [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        if (bookId !== undefined && bookId !== '') {
            editHandler()
        }
    }, [bookId])


    const handleSubmit = async (e) => {
        e.preventDefault()

        let judul = e.target.judul.value;
        let pengarang = e.target.pengarang.value;
        let penerbit = e.target.penerbit.value;
        let harga = e.target.harga.value;
        let ket = e.target.ket.value;
        let sinopsis = e.target.sinopsis.value;
        let link_gambar = e.target.link_gambar.value;

        if (!judul || !pengarang || !penerbit || !harga || !ket || !sinopsis || !link_gambar) {
            return alert('You Must Input Data !!')
        }

        try {
            setState({ ...state, loading: true })

            let editResp = await BookService.updateBook(bookId, state.book)
                .then((res) => { navigate('/', { replace: true }) })
                .catch((err) => { console.error(err) })
        }

        catch (error) {
            setState({
                ...book,
                errorMessage: error.message
            })

            navigate(`/books/edit/${id}`, { replace: false })
        }

    }

    return (
        <>
            <div className='w-screen h-screen max-w-[1020px] mx-auto px-4 sm:px-0'>
                <section className='py-10'>
                    <h1 className='text-2xl font-bold text-orange-300'>Edit Book</h1>
                    <p className='italic pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia possimus assumenda veritatis alias id dolorum nesciunt quisquam nemo? Dolores qui aperiam eaque saepe excepturi officia, sunt facere quibusdam dicta totam, cupiditate officiis distinctio voluptates sit adipisci veniam molestiae, reprehenderit aspernatur!</p>

                    <form onSubmit={handleSubmit} autoComplete='off' className='flex flex-col w-[500px] h-full'>
                        <div className='flex flex-col gap-3 pt-5'>
                            <Stack>
                                <Input
                                    value={state.book.judul}
                                    onChange={updateInput}
                                    name='judul'
                                    variant={'outline'}
                                    placeholder='Judul Buku'
                                    width={400} />
                                <Input
                                    value={state.book.pengarang}
                                    onChange={updateInput}
                                    name='pengarang'
                                    variant={'outline'} type='text'
                                    placeholder='pengarang'
                                    width={400} />
                                <Input
                                    value={state.book.penerbit}
                                    onChange={updateInput}
                                    name='penerbit'
                                    variant={'outline'} type='text'
                                    placeholder='Penerbit'
                                    width={400} />
                                <Input
                                    value={state.book.link_gambar}
                                    onChange={updateInput}
                                    name='link_gambar'
                                    variant={'outline'} type='url'
                                    placeholder='Link Gambar'
                                    width={400} />
                                <Input
                                    value={state.book.harga}
                                    onChange={updateInput}
                                    name='harga'
                                    variant={'outline'} type='number'
                                    placeholder='Harga' width={400} />
                                <Textarea
                                    value={state.book.ket}
                                    onChange={updateInput}
                                    name='ket'
                                    variant={'outline'}
                                    placeholder='Keterangan'
                                    width={400}
                                    height={100}
                                />

                                <Textarea
                                    value={state.book.sinopsis}
                                    onChange={updateInput}
                                    name='sinopsis'
                                    variant={'outline'}
                                    placeholder='Sinopsis'
                                    width={400}
                                    height={150}
                                />

                            </Stack>

                            <div className='flex gap-3 pt-3'>
                                <Button type='submit' w={20} bg={'green.400'} color='white' >Update</Button>
                                <Link to={'/books/list'} className='h-[40px] w-[100px] bg-black text-white flex justify-center items-center rounded-md hover:bg-slate-800 duration-300' >Cancel</Link>
                            </div>
                        </div>
                    </form>

                </section>
            </div>
        </>
    );
}
