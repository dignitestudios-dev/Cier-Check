
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FaCcPaypal } from 'react-icons/fa'

const UserCheckOut = () => {
    const { theme, products, handleQuantityChange,
        state, calculateSubtotal, deleteTodo, getTotalPrice } = useContext(ThemeContext)

    const deliveryCharges = 18

    const price = getTotalPrice()

    console.log("orice >>", price)

    console.log(state)
    return (
        <div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-24 gap-8'>

                <div className='w-full flex flex-col bg-pink-200 p-10 order-2 lg:order-1'>
                    <div className='p-8'>
                        <h2 className='text-4xl font-bold'>Step1: Shipping</h2>
                    </div>
                    <div className='bg-white px-10 rounded-lg'>
                        <div className='flex justify-between py-10'>
                            <h3 className='text-2xl font-bold'>Shipping Address</h3>
                            <button>change</button>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xl font-semibold'>Full Name: <span className='font-medium'>dslmsdl</span></p>
                            <p className='text-xl font-semibold'>Street address: <span className='font-medium'>dslmsdl</span></p>
                            <p className='text-xl font-semibold'>Apartment, suite, unit (optional): <span className='font-medium'>dslmsdl</span></p>
                            <p className='text-xl font-semibold'>City: <span className='font-medium'>dslmsdl</span></p>
                            <p className='text-xl font-semibold'>Phone: <span className='font-medium'>dslmsdl</span></p>
                        </div>
                        <div className='py-20 flex flex-col gap-4'>
                            <h3 className='text-2xl font-bold'>Shipping Address</h3>
                            <div className='flex gap-3 '>
                                <input type="radio" name="default-radio" checked={state == false} onChange={() => setState(false)} id="default-radio-1" className='w-6 h-6' />
                                <label htmlFor="" className='text-xl'>Standard Shipping</label></div>
                        </div>
                    </div>




                    <div className='flex flex-col gap-11  p-8'>
                        <h2 className='text-4xl font-bold'>Step2: Billing</h2>
                    </div>
                    <div className='bg-white'>
                        <div className='flex flex-col gap-7 py-8 px-8'>
                            <h3 className='text-2xl font-bold'>Payment Method</h3>
                            <button type="button" className='w-52 flex items-center justify-center  bg-yellow-400 py-2'>check out with <span><FaCcPaypal className='bg-white' /></span></button>
                            <p>or pay with credit card</p>
                        </div>
                        <div className='w-full flex  justify-between p-8 gap-7'>
                            <select name="cart" id="cart" className='w-full px-4 py-3 outline-none border-2 border-pink-500'>
                                <option value="">visa</option>
                                <option value="">Master Cart</option>
                                <option value="">Americon Express</option>
                                <option value="">Americon Express</option>
                            </select>

                            <input type="text" className='w-full px-4 outline-none border-2 border-pink-500' placeholder='Cart Number' />

                        </div>
                        <div className='w-full flex px-8 gap-7'>
                            <input type="text" name="" id="" className='w-full px-4 py-3 outline-none border-2 border-pink-500' placeholder=' Name' />
                        </div>
                        <div className='w-full flex  justify-between p-8 gap-7'>
                            <select name="cart" id="cart" className='w-full px-4 py-3 outline-none border-2 border-pink-500'>
                                <option value="">January</option>
                                <option value="">february</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">july</option>
                                <option value="">August </option>
                                <option value="">September </option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December  </option>
                            </select>

                            <select name="cart" id="cart" className='w-full px-4 py-3 outline-none border-2 border-pink-500'>
                                <option value="">2024</option>
                                <option value="">2025</option>
                                <option value="">2026</option>
                                <option value="">2027</option>
                                <option value="">2028</option>
                                <option value="">2029</option>
                                <option value="">2030</option>
                                <option value="">2031</option>
                                <option value="">2032</option>
                                <option value="">2033</option>
                                <option value="">2034</option>
                                <option value="">2035</option>
                                <option value="">2036</option>
                                <option value="">2037</option>
                                <option value="">2038</option>
                                <option value="">2039</option>
                            </select>

                        </div>
                        <div className='w-[52%] flex px-8 gap-7 '>
                            <input type="text" name="" id="" className='w-full px-4 py-3 outline-none border-2 border-pink-500' placeholder=' Password' />
                        </div>
                        <div className='flex items-center gap-3 py-5  px-8'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Save credit card information</label>
                        </div>
                        <h2 className='text-xl py-5 px-8'>Billing Address</h2>
                        <div className='flex items-center gap-3 py-3  px-8'>

                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Use my shipping address</label>
                        </div>
                        <div className='px-8 py-8'>
                            <button type="button" className='px-14 rounded-xl py-2 bg-pink-600 text-white text-xl font-medium'>continue</button>
                        </div>
                    </div>




                    <div className='flex flex-col p-8 '>
                        <h2 className='text-4xl font-bold'>Step3: Place Order</h2>
                        <div className='px-8 py-8'>
                            <button type="button" className='px-14 rounded-xl py-2 bg-pink-600 text-white text-xl font-medium'>Order Now</button>
                        </div>
                    </div>
                </div>

                <div className={`w-full flex flex-col items-center   order-1 lg:order-2  text-center gap-6    ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
                    <div className={` w-full  p-5 ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d]'} `} >
                        <h2 className='text-start font-bold text-2xl' >Order Summary</h2>
                        <div className={`w-full mt-5 p-5 rounded ${theme === "light" ? 'bg-white text-black' : 'bg-dark'} `} >
                            <h2 className='text-start font-bold text-2xl' >Your Selections</h2>
                            {
                                products.map((product, index) => (

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


























            </div>

        </div>
    )
}

export default UserCheckOut
