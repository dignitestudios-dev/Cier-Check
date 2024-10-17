import React, { useContext } from 'react'
import Navbar2 from '../Global/Navbar2'
import { ThemeContext } from '../context/ThemeContext'

const HeroQuestionnaire = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <Navbar2 />
            <div className={`py-16 ${theme === "light" ? 'bg-slate-50' : 'bg-dark'}`}>

                <div className={`w-[95%] lg:w-[60%] flex flex-col items-start justify-start mx-auto gap-10 py-14 px-6 md:px-7 lg:px-12 ${theme === "light" ? 'bg-white shadow-bg' : 'bg-[#2d2d2d]'}`}>
                    <h1 className='text-4xl'>Questionnaire</h1>
                    <div className='w-full flex flex-col items-start gap-4'>
                        <label htmlFor="">1. When was the last time you checked for breast cancer?</label>
                        <input type="text" name="" id="" className={`outline-none w-full px-5 py-3 ${theme === "light" ? 'bg-white text-black border' : 'border bg-[#2d2d2d]'}`} />
                        <div className='border w-full my-4' />
                        <div className='flex flex-col gap-2'>
                            <p>2. Do you feel a lump in any of your breasts that made you act on it for some time now?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>2. Do you feel a lump in any of your breasts that made you act on it for some time now?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>3. Do you have a history of breast cancer or any other type of cancer in your family?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>4. Do you know anyone suffering from breast cancer?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>

                        <div className='border w-full my-4' />
                        <div className='flex flex-col gap-2'>
                            <p>5. Are you looking forward to starting the process of checking for breast cancer?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full my-4' />
                        <div className='flex flex-col gap-2'>
                            <p>6. Did you know that cancer, in some instances, has no symptoms?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full my-6' />
                        <div className='flex flex-col gap-2'>
                            <p>7. Are you willing to use a CIERCHECK device to initiate your journey to awareness?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full my-6' />
                        <div className='flex flex-col gap-2'>
                            <p>8. Would you like something sent to you in the mail to help your process?
                            </p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full my-4' />


                        <div className='flex flex-col gap-2'>
                            <p>9. Are you an advocate or have you completed the breast cancer awareness walk?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>

                        <div className='border w-full my-4' />

                        <div className='flex flex-col gap-2'>
                            <p>10. Would you like special offers in the mail to spread the news about breast cancer?</p>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>Yes</span>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name='' id='Q1' />
                                    <span>No</span>
                                </label>
                            </div>

                        </div>
                        <div className='border w-full mt-4 mb-8' />
                        <button className=' btn'>
                            Submit
                        </button>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroQuestionnaire