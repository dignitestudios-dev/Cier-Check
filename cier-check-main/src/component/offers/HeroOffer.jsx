
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const HeroOffer = () => {
    const { theme } = useContext(ThemeContext)
    return (



        <div className={`w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  px-10 lg:px-12 xl:px-32  py-12 lg:gap-y-10 ${theme === 'light' ? 'bg-white text-black' : 'bg-dark'}`}>
            <div className=''>
                <img src="public/pink-piggy-bank-with-money-paper-shopping-bag.jpg" alt="" className='w-full h-full' />

            </div>
            <div className='w-full h-full bg-pink-600 flex flex-col justify-center p-10 lg:p-20  gap-9 mb-9  lg:mb-0'>
                <h2 className='section-heading text-white'>
                    20% off for students through Student Beans
                </h2>
                <Link to={"/product"} ><button className='w-32 lg:w-52 rounded-lg py-3 bg-pink-200 text-xl font-semibold '>Shop</button>
                </Link>
            </div>


            <div className='w-full h-full bg-pink-600 flex flex-col justify-center p-10 lg:p-20  gap-9  '>
                <h2 className='section-heading text-white'>
                    20% off for students through Student Beans
                </h2>
                <Link to={"/product"} ><button className='w-52 rounded-lg py-3 bg-pink-200 text-xl font-semibold '>Shop</button>
                </Link>
            </div>
            <div className='mb-9 lg:mb-0    '>
                <img src="public/pink-piggy-bank-with-money-paper-shopping-bag.jpg" alt="" className='w-full h-full' />

            </div>
            <div >
                <img src="public/pink-piggy-bank-with-money-paper-shopping-bag.jpg" alt="" className='w-full h-full' />

            </div>
            <div className='w-full h-full bg-pink-600 flex flex-col justify-center p-10 lg:p-20  gap-9  '>
                <h2 className='section-heading text-white'>
                    20% off for students through Student Beans
                </h2>
                <Link to={"/product"} ><button className='w-52 rounded-lg py-3 bg-pink-200 text-xl font-semibold '>Shop</button>
                </Link>
            </div>

            <div className='w-full h-full bg-pink-600 flex flex-col justify-center p-10 lg:p-20  gap-9 mt-10 lg:mt-0'>
                <h2 className='section-heading text-white'>
                    20% off for students through Student Beans
                </h2>
                <Link to={"/product"} ><button className='w-52 rounded-lg py-3 bg-pink-200 text-xl font-semibold '>Shop</button>
                </Link>
            </div>
            <div className='mb-9 lg:mb-0'>
                <img src="public/pink-piggy-bank-with-money-paper-shopping-bag.jpg" alt="" className='w-full h-full' />

            </div>

        </div>
    )
}

export default HeroOffer