import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { ProductsJson } from '../../constants/Products';
import Drawer from './Drawer';
import { json, NavLink } from 'react-router-dom';
export default function ShopProduct() {
  const { theme, setDrawOpen, isDrawOpen, toggleTodo, getTotalPrice, handleQuantityChange, addProduct, openDrawer, deleteTodo } = useContext(ThemeContext)

  // const HandleCart = (ProductId) => {

  //   const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  //   const newItem = {
  //     id: ProductId,
  //     qty: 1,
  //   };
  //   const existingItem = cartData?.find((item) => item.id === ProductId);

  //   if (existingItem) {
  //     existingItem.qty += 1;
  //   } else {
  //     cartData.push(newItem);
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cartData));
  //   setDrawOpen(!isDrawOpen)
  // };

  return (
    <div className={`w-full flex flex-col items-center  justify-center text-center gap-6 pb-10  horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
      <h2 className='text-center section-heading' >All Products</h2>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        {
          ProductsJson.map((item, i) => (

            <div className='border border-[#FBCFE8] ' key={i} >
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className='text-center mt-2 p-1' >
                <h3 className='font-medium text-xl' >
                  {item?.title}
                  <br />
                  <span className='text-pink-400 mt-2 mb-2' > resurface + brighten</span>
                </h3>
                <div className="review flex justify-center mt-2">
                  <IoIosStar color='#FAAF00' size={23} />
                  <IoIosStar color='#FAAF00' size={23} />
                  <IoIosStar color='#FAAF00' size={23} />
                  <CiStar className='' size={23} />
                  <span className='pl-1 pr-1 text-pink-500 '>1 Review</span>
                </div>
                <p className='text-[14px] mt-2 mb-2 ' >
                  <span className='text-red-400 font-bold' >${item?.price}</span>
                  <del className='font-bold ms-2' > $150 </del>
                </p>
                <button onClick={() => addProduct(item)} className='bg-pink-600 px-5 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all mt-2 mb-4  '>Add To Cart</button>
                <NavLink className='bg-pink-600 ml-2 px-5 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all mt-2 mb-4  ' to={`/detail/${item.id}`} >Detail </NavLink>

              </div>
            </div>
          ))
        }


      </div>

    </div>
  )
}
