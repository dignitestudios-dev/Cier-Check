import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const MeetOurBoard = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={` mx-11 py-10 lg:py-20  px-6 lg:px-12 rounded-xl ${theme === "light" ? 'bg-pink-200 text-black ' : 'bg-dark'}`}>

            <div className={`w-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 py-10 lg:py-20 px-12 rounded-xl  gap-4 ${theme === "light" ? 'bg-pink-200 text-black ' : 'bg-[#2d2d2d]'}`}>
                <div className=' col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start justify-start gap-6'>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wider'>
                        Meet our Board Certified Dermatologists
                    </h2>
                    <p className='text-base lg:text-[16px] xl:[22px]  '>
                        Our scientific advisory board lends insights and strategic guidance to help create solutions that treat, restore & maintain healthy skin
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <img src="public/dr 1.png" alt="" className='w-[180px] md:w-[240px] lg:w-[340px]' />
                    <p className='text-base lg:text-[16px] xl:[22px]'>Dr. Rachel Nazarian, MD, FAAD</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <img src="public/dr 1.png" alt="" className='w-[180px] md:w-[240px] lg:w-[340px]' />
                    <p className='text-base lg:text-[16px] xl:[22px]'>Dr. Rachel Nazarian, MD, FAAD</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <img src="public/dr 1.png" alt="" className='w-[180px] md:w-[240px] lg:w-[340px]' />
                    <p className='text-base lg:text-[16px] xl:[22px]'>Dr. Rachel Nazarian, MD, FAAD</p>
                </div>



            </div>
        </div>
    )
}

export default MeetOurBoard