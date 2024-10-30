import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Banner() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-20  ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
            <div className='w-full'>
                <img src="/a0c909613b.jpeg" alt="" />
            </div>
            <div className='w-full flex justify-center flex-col hero p-16  ' >
                <h2 className=' text-2xl md:text-4xl lg:text-6xl text-white font-bold' >Shop All</h2>
                <p className='mt-3 text-white text-xl' >Start your clear skin journey with our range of dermatologist-developed products designed for acne-prone skin.</p>
            </div>
        </div>
    )
}
