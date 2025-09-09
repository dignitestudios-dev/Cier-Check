import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ProductsJson } from '../../constants/Products';
import { NavLink } from 'react-router-dom';
export default function ProductCategory() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-full  flex flex-col items-center  justify-center text-center gap-6 py-12 lg:py-16 horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
            <h2 className='text-center section-heading' >Full range acne care for all your clear skin needs</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {
                    ProductsJson.map((item, i) => (
                        <div className='border border-[#FBCFE8] group ' key={i} >
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='text-center pt-2 p-1 pb-3 transition ease-in-out delay-100 group-hover:text-white group-hover:bg-pink-300' >
                                <h3 className='font-medium text-xl' >{item.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-center mt-2' >
                <NavLink to={'/product'} className="bg-pink-600 px-5 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all">Shop All</NavLink>
            </div>
        </div>
    )
}
