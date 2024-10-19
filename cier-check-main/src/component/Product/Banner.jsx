import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Banner() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full  mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-10 py-12 lg:py-[150px] horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
            <div>
                <img src="/a0c909613b.jpeg" alt="" srcSet="" />
            </div>
            <div className='flex justify-center flex-col' >
                <h2 className='text-4xl text-pink-400 font-bold' >Shop All</h2>
                <p className='mt-3 font-medium' >Start your clear skin journey with our range of dermatologist-developed products designed for acne-prone skin.</p>
            </div>
        </div>
    )
}
