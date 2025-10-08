import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { ProductsJson } from '../../constants/Products';
import { useNavigate } from 'react-router-dom';
export default function Products() {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();
  return (
    <div className={`w-full flex flex-col items-center  justify-center text-center gap-6 py-12 lg:py-20 horizontal-padding `} >
      <div className='w-full flex items-center justify-between '>
      <h2 className='text-center text-[24px] font-[600] text-[#000000]' >Choose the dermatologist-developed routine for your unique skin</h2>
      <button className="bg-[#E10983] w-[85px] h-[40px] rounded-[100px]  text-[#FFFFFF]  text-[16px] font-[500] ">View All</button>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {
          ProductsJson.map((item, i) => (
            <div  className='bg-[#ffffff] p-3 rounded-3xl ' key={i} >
              <div className='relative   '>
                <img src={item.image} alt=""  className="" />
                <div className='absolute top-3 right-4 bg-white flex items-center justify-center gap-1 w-[41px] h-[27px] rounded-[100px] '>
                  <img src="/star.png" alt=""  className='w-[12px] h-[12px] '/>
                  <p className='text-[11px] font-[400]' >4.5</p>
                </div>
              </div>
              <div className=' mt-2 p-1 ' >
                <h3 className=' text-[16px] text-[#000000] font-[500] flex justify-between' >{item.title} <span className='text-[14px] font-[600] text-[#E10983]' >${item.price}</span></h3>
               
                
                <p className='text-[14px] mt-2 mb-2 text-start ' >{item.text}</p>
              </div>
              <button onClick={() => navigate(`/detail/1`)}  className='w-full h-[44px] rounded-[100px]  text-[#FFFFFF]  text-[16px] font-[500] new-gradient-btn' >
                <p>Buy Now</p>
              </button>
            </div>
          ))
        }
      </div>

    </div>
  )
}
 