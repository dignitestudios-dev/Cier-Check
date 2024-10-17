import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useLocation, useParams } from 'react-router-dom'
import { ProductsJson } from '../../constants/Products';
import { IoIosStar } from 'react-icons/io';
import { CiStar } from 'react-icons/ci';
import { FaCartShopping } from 'react-icons/fa6';

export default function DetailSection() {
    const { theme } = useContext(ThemeContext)
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
          existingItem.qty +=parseInt(qty);
        } else {
          cartData.push(newItem);
        }
  
        localStorage.setItem("cart", JSON.stringify(cartData));
        setDrawOpen(!isDrawOpen)
      };
  



    return (
        <div className={`w-full flex flex-col items-center  justify-center  gap-6 pb-10   horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
            <div className="">
                <div className="container mx-auto px-4 py-8  mt-28">
                    <div className="flex flex-wrap -mx-4">
                        {/* Product Images */}
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <img
                                src={product.image}
                                alt="Product"
                                className="w-full h-[80%] rounded-lg shadow-md mb-4"
                                id="mainImage"
                            />
                        </div>
                        {/* Product Details */}
                        <div className="w-full md:w-1/2 px-4 mt-2">
                            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                            <div className="mb-4">

                                <span className="text-lg font-bold mr-2">${product.price}</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="review flex justify-center mt-2">
                                    <IoIosStar color='#FAAF00' size={23} />
                                    <IoIosStar color='#FAAF00' size={23} />
                                    <IoIosStar color='#FAAF00' size={23} />
                                    <CiStar className='' size={23} />
                                    <span className="ml-2 ">{product.ratting} (120 reviews)</span>
                                </div>

                            </div>
                            <p className=" mb-6">
                                {product.text}
                            </p>
                            <div className="mb-6">
                                <label
                                    htmlFor="quantity"
                                    className="block text-sm font-medium     mb-1"
                                >
                                    Quantity:
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={1}
                                    onChange={(e)=>setQty(e.target.value)}
                                    defaultValue={1}
                                    className={`w-12 ${theme === "light" ? 'bg-white text-black' : 'bg-dark'} text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                                />
                            </div>
                            <div className="flex space-x-4 mb-6">
                                <button  onClick={() => HandleCart(product?.id)} className="bg-pink-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                                <FaCartShopping color="white" size={20} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
