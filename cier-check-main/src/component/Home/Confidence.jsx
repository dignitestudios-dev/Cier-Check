import React from 'react'

const Confidence = () => {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 py-14 p-6 lg:px-32 '>
            <div className='col-span-1'>
                <img src="public/cier-tsghrt.webp" className='' alt="" />
            </div>
            <div className='  lg:col-span-2 flex flex-col items-center justify-center gap-8'>
                <h2 className='text-center text-4xl lg:text-5xl font-bold '>Navigating Your Journey with Confidence</h2>
                <div className='border w-16' />
                <p className='text-center'>Embark on your journey with confidence as your compass, navigating every step with unwavering assurance and resilience.</p>
                <button className=' bg-pink-600 px-9   py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all'>Contact Us</button>
            </div>
        </div>


    )
}

export default Confidence
