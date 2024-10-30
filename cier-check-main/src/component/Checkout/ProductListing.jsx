import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ProductsJson } from '../../constants/Products';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function ProductListing() {
    const { theme, products, handleQuantityChange, calculateSubtotal, deleteTodo } = useContext(ThemeContext)
    // const [cartItem, setCartItem] = useState([]);
    // const CartProduct = JSON.parse(localStorage.getItem("cart")) || [];
    // useEffect(() => {
    //     if (CartProduct.length > 0) {
    //         const data = ProductsJson.filter((item) =>
    //             CartProduct.some(cartItem => cartItem.id === item.id)
    //         );
    //         setCartItem(data);
    //         const totalPrice = data.reduce((acc, item) => {
    //             const qty = CartProduct.find(cartItem => cartItem.id === item.id)?.qty || 0;
    //             return acc + (item.price * qty);
    //         }, 0);
    //     } else {
    //         setCartItem([]);
    //     }
    // }, [CartProduct]);




    return (
        <div className={`w-full flex flex-col items-center   justify-center text-center gap-6 py-10  horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
            <div className={`lg:mt-[200px] w-full  p-5 ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d]'} `} >
                <h2 className='text-start font-bold text-2xl' >Order Summary</h2>
                <div className={`w-full mt-5 p-5 rounded ${theme === "light" ? 'bg-white text-black' : 'bg-dark'} `} >
                    <h2 className='text-start font-bold text-2xl' >Your Selections</h2>
                    {
                        products.map((product, index) => (
                            // <div className='rounded  border border-pink-200 mt-4' >
                            //     <div className='grid grid-cols-2' >
                            //         <div className='flex ' >
                            //             <img src={product.image} className="w-20 h-20" alt="" />
                            //             <div className='text-start ml-2' >
                            //                 <h3 className="font-bold text-xl">{product.title}</h3>
                            //                 <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                            //                 <span>{product.quantity}</span>
                            //                 <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                            //             </div>
                            //         </div>

                            //         <div></div>
                            //     </div>
                            // </div>
                            <div className='w-[90%] lg:w-[100%] mx-auto grid grid-cols-7 justify-center items-center  py-3' key={index}>
                                <div className=' col-span-7 lg:col-span-2 flex flex-col lg:flex-row  lg:items-center lg:justify-center gap-3 lg:gap-12 pb-2 lg:pb-0 px-3'>
                                    <button onClick={() => deleteTodo(index)}><IoIosCloseCircleOutline className='w-6 h-6 text-gray-400 hover:text-black  lg:border-none' /></button>
                                    <div className='boder border-b-2 lg:hidden' />
                                    <img src={product?.image} className='w-20 h-20 mx-auto ' alt="" />

                                </div>
                                <div className=' col-span-7 flex items-center justify-between lg:col-span-2 border lg:border-none py-4 lg:py-0 px-3 lg:px-0'>
                                    <p className='lg:hidden  font-medium'>Product</p>

                                    <p>{product.title}</p>
                                </div>

                                <div className=' col-span-7 lg:col-span-1  flex items-center justify-between  border-b-2 lg:border-none py-4 lg:py-0 px-3 lg:px-0'>
                                    <p className='lg:hidden font-medium'>Price</p>
                                    <p>${product.price}</p>
                                </div>
                                <div className=' col-span-7 lg:col-span-1 flex items-center justify-between border-b-2 lg:border-none py-4 lg:py-0 px-3 lg:px-0'>
                                    <p className='lg:hidden  font-medium'>Quantity</p>
                                    <p className='flex text-right lg:text-center justify-end lg:justify-center gap-4'>
                                        <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                                    </p>
                                </div>
                                <div className=' col-span-7 lg:col-span-1 flex items-center justify-between   lg:border-none py-4 lg:py-0 px-3 lg:px-0'>
                                    <p className='lg:hidden  font-medium'>Subtotal</p>
                                    <p>	${calculateSubtotal(product.price, product.quantity)}.00</p>
                                </div >

                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
