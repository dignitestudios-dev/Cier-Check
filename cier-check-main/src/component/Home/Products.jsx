import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { ProductsJson } from '../../constants/Products';
export default function Products() {
    const { theme } = useContext(ThemeContext)
  return (
    <div className={`w-full flex flex-col items-center  justify-center text-center gap-6 py-12 lg:py-20 horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
      <h2 className='text-center text-4xl font-bold' >Choose the dermatologist-developed routine for your unique skin</h2>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        {
            ProductsJson.map((item,i)=>(
          <div className='border border-[#FBCFE8]' key={i} >
             <div>
                 <img src={item.image} alt="" />
             </div>
             <div className='text-center mt-2 p-1' >
                   <h3 className='font-medium text-xl' >{item.title}</h3>
                   <div className="review flex justify-center mt-2">
                    <IoIosStar color='#FAAF00' size={23} />
                    <IoIosStar color='#FAAF00' size={23} />
                    <IoIosStar color='#FAAF00' size={23} />
                    <CiStar className='' size={23} />
                     <span className='border border-t-0 border-b-0 rounded border-[#000] pl-1 pr-1 '>44368</span>
                   </div>
                   <h3 className='fw-bold text-lg font-bold mt-3' >{item.subtitle}</h3>
                   <p className='text-[14px] mt-2 mb-2 ' >Our best-selling oil control routine that clears blemishes while helping to balance the skin's natural oils</p>
             </div>
          </div>
            ))
        }
    </div>

    </div>
  )
}
