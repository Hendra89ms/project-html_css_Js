import React from 'react'
import { Spinner, defineStyle, defineStyleConfig } from '@chakra-ui/react'

export default function Spinerpage() {

    const xxl = defineStyle({
        height: 100,
        width: 100,
    });
    const spinnerTheme = defineStyleConfig({
        sizes: { xxl },
    })

    return (
        <div className='flex justify-center items-center mt-[240px]'>
            <Spinner thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>

    )
}
