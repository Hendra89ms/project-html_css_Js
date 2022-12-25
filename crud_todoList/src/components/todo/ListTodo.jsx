import React from 'react';
import { IconButton } from '@chakra-ui/react'
import { CheckIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'


export default function ListTodo({ judul, tanggal, handleCoret, handleEdit, handleDelete }) {

    return (
        <>
            <div className='flex flex-wrap bg-slate-100 gap-4 mt-5 p-10 w-full h-auto border-[1px] border-slate-250'>


                <div className='flex flex-col justify-between bg-white w-[300px]  h-[200px] p-4 '>

                    <div className='flex gap-2 ml-auto'>


                        <IconButton colorScheme='teal'
                            aria-label='Call Segun'
                            size='sm'
                            // onClick={() => handleCoret}
                            icon={<CheckIcon />} />

                        <IconButton colorScheme='teal'
                            aria-label='Call Segun'
                            size='sm'
                            // onClick={()=>{handleEdit}}
                            icon={<EditIcon />} />

                        <IconButton colorScheme='teal'
                            aria-label='Call Segun'
                            size='sm'
                            // onClick={handleDelete}
                            icon={<DeleteIcon />} />
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident nemo quas ipsum magnam beatae vero, possimus placeat porro corporis.</p>

                    <div className='ml-auto'>30 january 2022</div>
                </div>

                <div className='flex flex-col justify-between bg-white w-[300px]  h-[200px] p-4 '>

                    <div className='flex gap-2 ml-auto'>


                        <IconButton colorScheme='teal'
                            aria-label='Call Segun'
                            size='sm'
                            // onClick={() => handleCoret}
                            icon={<CheckIcon />} />

                        <IconButton colorScheme='teal'
                            aria-label='Call Segun'
                            size='sm'
                            // onClick={()=>{handleEdit}}
                            icon={<EditIcon />} />

                        <IconButton colorScheme='teal'
                            aria-label='Call Segun'
                            size='sm'
                            // onClick={handleDelete}
                            icon={<DeleteIcon />} />
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident nemo quas ipsum magnam beatae vero, possimus placeat porro corporis.</p>

                    <div className='ml-auto'>30 january 2022</div>
                </div>



            </div>
        </>
    );
}
