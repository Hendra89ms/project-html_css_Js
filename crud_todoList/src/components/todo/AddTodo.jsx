import React, { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import ListTodo from './ListTodo'
import TodoServices from '../../services/todo_services'
import { Moment } from 'moment'

export default function AddTodo() {

    const [state, setState] = useState({
        loading: false,
        todo: {
            judul: '',
            tanggal: moment().format('MMMM Do YYYY')
        },
        error: '',
    })


    let updateInput = (e) => {
        setState({
            ...state,
            todo: {
                ...state.todo,
                [e.target.name]: e.target.value
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        let judul = e.target.judul.value;

        try {
            setState({ ...state, loading: true })
            let respon = await TodoServices.addTodos(state.todo)



        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                error: error.message
            })
        }

        e.target.judul.value = ''

    }

    return (
        <div className='w-[800px] h-screen m-auto pt-5'>
            <h1 className='text-2xl'>TodoList <span className='text-orange-400'>App</span></h1>
            <hr />

            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 mt-4 p-10 w-full h-auto border-[1px] border-slate-250'
            >
                <Input
                    name='judul'
                    value={state.todo.judul}
                    onChange={updateInput}
                    placeholder='Enter Todo...'
                    borderColor='blackAlpha.500' />
                <Button type='submit' leftIcon={<AddIcon />} bg='orange.400' color='white' width={200}>Add</Button>
            </form>

            <ListTodo />

            <footer className=' flex mt-[75px] w-full h-[40px] justify-center items-center bg-slate-500 text-white'>@copyRight 2022</footer>
        </div>
    )
}
