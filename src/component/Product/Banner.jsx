import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Banner() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full h-[500px]  shop-bg flex items-center justify-center`} >
            
            <div data-aos="fade-right" className='w-full flex justify-center flex-col  p-16  ' >
                <h2 className=' text-[40px]  text-white font-[600]' >The First Step Toward Healthy, Clear Skin</h2>
                <p className='mt-3 text-white text-[16px]' >Start your clear skin journey with our range of dermatologist-developed products<br />designed for acne-prone skin.</p>
            </div>
        </div>
    )
}
