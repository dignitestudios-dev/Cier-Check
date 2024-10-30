import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useLocation, useParams } from 'react-router-dom'
import { ProductsJson } from '../../constants/Products';
import { IoIosStar } from 'react-icons/io';
import { CiStar } from 'react-icons/ci';
import { FaCartShopping } from 'react-icons/fa6';
import { Radio } from "@material-tailwind/react";

export default function DetailSection() {
    const { theme, addProduct } = useContext(ThemeContext)
    const paramId = useParams();
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
    useEffect(() => {
        let currentProduct = ProductsJson.filter((item, i) => item.id == parseInt(paramId?.id));
        setProduct(currentProduct[0]);
    }, [paramId])

    const HandleCart = (ProductId) => {

        const cartData = JSON.parse(localStorage.getItem("cart")) || [];

        const newItem = {
            id: ProductId,
            qty: qty,
        };
        const existingItem = cartData?.find((item) => item.id === ProductId);

        if (existingItem) {
            existingItem.qty += parseInt(qty);
        } else {
            cartData.push(newItem);
        }

        localStorage.setItem("cart", JSON.stringify(cartData));
        setDrawOpen(!isDrawOpen)
    };




    return (
        <div className={`w-full flex flex-col items-center  justify-center  gap-6 pb-10   horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >

            <div className="container mx-auto px-4 py-8  mt-28">
                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <img
                            src={product.image}
                            alt="Product"
                            className="w-full h-[80%] rounded-lg shadow-md mb-4"
                            id="mainImage"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-4 mt-2 flex flex-col">
                        <h2 className="text-6xl font-bold mb-2">{product.title}</h2>

                        <div className="flex items-center mb-4">
                            <div className="review flex  items-center justify-center mt-2">
                                <IoIosStar color='#FAAF00' size={28} />
                                <IoIosStar color='#FAAF00' size={28} />
                                <IoIosStar color='#FAAF00' size={28} />
                                <IoIosStar color='#FAAF00' size={28} />

                                <CiStar className='' size={28} />
                                <span className="pl-3 text-lg text-blue-500 ">{product.ratting} (120 reviews)</span>
                            </div>
                        </div>
                        <div>

                            <p className=" mb-6 text-xl font-normal">
                                {product.text}
                            </p>
                        </div>
                        <div className='w-full flex  justify-start gap-4 pb-6'>

                            <div class={`flex items-center mb-4 ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`}>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-12 h-12 " />
                            </div>
                            <div className='flex flex-col'>

                                <label for="default-radio-1" class={` ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300 flex gap-6 ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`}>{product.mixpt} <span>${product.mixprice}.00/Month</span>
                                </label>
                                <ul className='ms-7 list-disc text-lg'>
                                    <li>Save up to 30% when subscribing</li>
                                    <li>Save up to 30% when subscribing</li>
                                    <li>Save up to 30% when subscribing</li>
                                    <li>Save up to 30% when subscribing</li>

                                </ul>


                            </div>





                        </div>

                        <div class="flex items-center pb-10">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-12 h-12 " />
                            <label for="default-radio-2" class={`ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300 flex gap-6 ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`}>{product.minipt} <span>${product.miniprice}.00</span></label>
                        </div>


                        <div className='flex items-center justify-start gap-5'>

                            <div className="">
                                <label
                                    htmlFor="quantity"
                                    className="block text-sm font-medium     mb-1"
                                >

                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={1}
                                    onChange={(e) => setQty(e.target.value)}
                                    defaultValue={1}
                                    className={`w-20 h-10 ${theme === "light" ? 'bg-white text-black' : 'bg-dark'} text-center rounded-md border-gray-300  text-xl shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                                />
                            </div>
                            <div className="flex ">
                                <button onClick={() => addProduct(item)} className="bg-pink-600 flex gap-2 items-center text-white px-6 py-3 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                                    <FaCartShopping color="white" size={20} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className='pt-28 flex flex-col justify-center'>
                            <h3 className='text-4xl font-bold'>Size</h3>
                            <div className='pt-8 flex gap-3'>
                                <button className='py-4 px-6 border-2 border-pink-600 rounded-full text-2xl font-bold hover:bg-pink-200 duration-200 transition-all'>90 day</button>
                                <button className='py-4 px-6 border-2 border-pink-600 rounded-full text-2xl font-bold hover:bg-pink-200 duration-200 transition-all'>90 day</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
