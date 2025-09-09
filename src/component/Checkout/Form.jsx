import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Form = () => {
    const { theme, getTotalPrice, state, setState } = useContext(ThemeContext)
    const deliveryCharges = 18

    const price = getTotalPrice()

    console.log("orice >>", price)

    console.log(state)

    return (
        <div className={`${theme === "light" ? 'bg-white text-black' : 'bg-[#1c1c1c]'}`}>

            <div className={` flex flex-col px-8 py-6 mx-4 lg:mx-32 ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d]'}`}>

                <div className={`w-full px-8 flex flex-col my-4 gap-6 py-10 ${theme === "light" ? 'bg-white text-black' : 'bg-[#1c1c1c] text-white'} rounded-lg`} >
                    <h1 className='text-2xl font-semibold'>Promotions</h1>
                    <div className='flex flex-col lg:flex-row gap-5'>

                        <input type="text" name="" id="" placeholder='Promo code' className=' lg:w-[70vh] px-2 lg:px-4 py-2 lg:py-4 rounded-lg border-2' />
                        <button className='bg-pink-400 px-10 lg:px-28 rounded-full py-2 lg:py-4 text-xl font-bold '>apply</button>
                    </div>
                </div>

                <div className={`px-8 my-4 gap-6 py-10  rounded-lg ${theme === "light" ? 'bg-white text-black' : 'bg-[#1c1c1c] text-white'}`}>
                    <h1 className='text-2xl font-semibold'>Shipping</h1>
                    <div className='flex items-center gap-3 py-3'>
                        <input type="radio" name="default-radio" checked={state == false} onChange={() => setState(false)} id="default-radio-1" className='w-12 h-12' />
                        <label htmlFor="" className='text-xl'>$0.00 Standard (4-7 business days)</label>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <input type="radio" name="default-radio" checked={state == true} onChange={() => setState(true)} id="default-radio-2" className='w-12 h-12' />
                        <label htmlFor="" className='text-xl'>$14.99 Expedited (1-2 business days)</label>
                    </div>
                </div>

                <div className={`px-8 my-4  py-10  rounded-lg ${theme === "light" ? 'bg-white text-black' : 'bg-[#1c1c1c] text-white'}`}>
                    <h1 className='text-2xl font-semibold'>Your Total</h1>
                    <div className='w-full flex justify-between pt-6 '>
                        <p className='text-xl font-medium'>Subtotal:</p>
                        <p className='text-xl font-medium'>${getTotalPrice()}.00</p></div>
                    <div className='w-full flex justify-between'>
                        <p className='text-xl font-medium'>shipping:</p>
                        <p className='text-xl font-medium'>{state ? "$" + deliveryCharges + ".00" : "Free"}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='text-xl font-medium'>Order total:</p>
                        <p > ${state ? price + deliveryCharges : price}.00</p>
                    </div>
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default Form
