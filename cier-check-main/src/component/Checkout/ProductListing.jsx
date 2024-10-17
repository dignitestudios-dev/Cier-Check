import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ProductsJson } from '../../constants/Products';

export default function ProductListing() {
    const { theme } = useContext(ThemeContext)
    const [cartItem, setCartItem] = useState([]);
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
        } else {
            setCartItem([]);
        }
    }, [CartProduct]);




    return (
        <div className={`w-full flex flex-col items-center   justify-center text-center gap-6 pb-10  horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
            <div className={`lg:mt-[200px] w-full lg:mb-28 p-5 ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-dark'} `} >
                <h2 className='text-start font-bold text-2xl' >Order Summary</h2>
                <div className={`w-full mt-5 p-5 rounded ${theme === "light" ? 'bg-white text-black' : 'bg-dark'} `} >
                    <h2 className='text-start font-bold text-2xl' >Your Selections</h2>
                    {
                        cartItem.map((item,i)=>(
                            <div className='rounded  border border-pink-200 mt-4' >
                            <div className='grid grid-cols-2' >
                                <div className='flex ' >
                                    <img src={item.image} className="w-20 h-20" alt="" />
                                    <div className='text-start ml-2' >
                                        <h3 className="font-bold text-xl">{item.title}</h3>
                                    </div>
                                </div>
    
                                <div></div>
                            </div>
                        </div>
                        ))
                    }  
                   

                </div>
            </div>
        </div>
    )
}
