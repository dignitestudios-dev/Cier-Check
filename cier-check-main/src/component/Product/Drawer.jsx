import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { json, NavLink } from "react-router-dom";
import { ProductsJson } from "../../constants/Products";
import { ThemeContext } from "../context/ThemeContext";
export default function Drawer() {
   
  const { theme,setDrawOpen,isDrawOpen,setCartItemLeng } = useContext(ThemeContext)
   
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const CartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  
  useEffect(() => {
    if (CartProduct.length > 0) {
      const data = ProductsJson.filter((item) => 
        CartProduct.some(cartItem => cartItem.id === item.id)
      );
      setCartItem(data);  
      const totalPrice = data.reduce((acc, item) => {
        const qty = CartProduct.find(cartItem => cartItem.id === item.id)?.qty || 0;
        return acc + (item.price * qty);
      }, 0);
      
      setTotal(totalPrice);
      setCartItemLeng(cartItem?.length);
    } else {
      setCartItem([]); 
      setTotal(0);   
       setCartItemLeng(0);
    }
  }, [CartProduct]);
  
  const handleDeleteCartItem = (deleteId) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartData.findIndex((item) => item.id == deleteId);
    if (existingItemIndex !== -1) {
      cartData.splice(existingItemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cartData));
      setCartItem(prevItems => prevItems.filter(item => item.id !== deleteId));
     
      const updatedTotalPrice = cartItem.reduce((acc, item) => {
        const qty = CartProduct.find(cartItem => cartItem.id === item.id)?.qty || 0;
        return acc + (item.price * qty);
      }, 0);
     
      setTotal(updatedTotalPrice);
    }
 
  };
  

    
  return (
    <main
      className={
        " fixed overflow-hidden z-[9999] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isDrawOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-[350px] right-0 absolute  h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isDrawOpen ? " translate-x-0 " : " translate-x-full ") + (theme === "light" ? 'bg-white text-black' : 'bg-dark')
        }
      >
        <div className="relative  w-[100%] pb-10 flex flex-col space-y-6 p-5 overflow-y-scroll h-full">
          <div className="flex justify-between items-center  ">
           <h3 className="font-bold text-xl" >Cart</h3>
          <button className="cursor-pointer bg-transparent" onClick={()=>setDrawOpen(!isDrawOpen)} ><IoMdClose size={25} /></button>        
          </div>
          {cartItem?.map((item, index) => (
      <div className="flex justify-between" key={index}>
        <div>
          <img src={item.image} className="w-20 h-20" alt="" />
        </div>
        <div className="text-start">
          <h3 className="font-bold text-xl">{item.title}</h3>
          <p className="font-medium">QTY: {CartProduct[index]?.qty} <span>${CartProduct[index]?.qty * item.price}</span></p>
        </div>
        <div>
          <button onClick={() => handleDeleteCartItem(item.id)} className="cursor-pointer bg-transparent">
            <IoMdClose size={25} />
          </button>
        </div>
      </div>
    ))}
    <div>
      <div className="flex justify-between p-0">
        <p>Items in Cart</p>
        <p>{cartItem?.length}</p>
      </div>
      <div className="flex justify-between p-0">
        <p>Cart subtotal</p>
        <p>${total.toFixed(2)}</p> {/* Display total with two decimal places */}
      </div>
    </div>
            <NavLink to={'/checkout'}  className='bg-pink-600 px-5 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all mt-2 mb-4 '>Checkout</NavLink>
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setDrawOpen(false);
        }}
      ></section>
    </main>
  );
}
