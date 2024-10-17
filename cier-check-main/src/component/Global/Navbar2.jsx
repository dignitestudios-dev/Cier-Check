import React, { useContext, useEffect, useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ThemeTogglerButton from './ThemeTogglerButton'
import { ThemeContext } from '../context/ThemeContext'
import { IoClose } from 'react-icons/io5'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar2 = () => {
    const { theme,setDrawOpen,isDrawOpen,CartItemLeng } = useContext(ThemeContext)
    const [open, setOpen] = useState(false)
    const handlenav = () => {
        setOpen(!open)
    }


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true); // User has scrolled down
            } else {
                setIsScrolled(false); // User is at the top of the page
            }
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed left-0 top-0 z-50 transition-all duration-200 ${isScrolled ? `${theme === "light" ? 'bg-white text-black' : 'bg-black text-black'}` : "bg-pink-300"}`}>

            <div className='w-full h-28 relative   flex items-center z-50 justify-between horizontal-padding'>
                <div className=''>
                    <Link to={'/'}>
                        <img src="/logo-2.png" className=' h-[4.5rem]' alt="" />
                    </Link>
                </div>
                <div className='navbar '>
                    <Link to={'/'} className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`}>Home</Link>
                    <Link to={'/breast-cancer'} className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`} >Breast Cancer Awareness</Link>
                    <Link to={'/cancer-glossery'} className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`} >Cancer Glossary</Link>
                    <Link to={'/contact-us'} className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`}>Contact Us</Link>
                    <Link to={'/startquestionnaire'} className=' bg-pink-600 px-6 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all'>Start Questionnaire</Link>
                    <ThemeTogglerButton />
                    <div class='text-center flex justify-center gap-6'>
      <button type='button' onClick={()=>setDrawOpen(!isDrawOpen)}  class='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-pink-600 rounded-lg '>
      <FaCartShopping size={20} />
      <div class='absolute inline-flex items-center justify-center py-0.5 px-1.5 text-xs font-normal text-white bg-red-500 border-2 border-white rounded-full -top-3 -left-3'>{CartItemLeng}</div>
      </button>
      </div>
                </div>

                <div className='lg:hidden '>
                    <button className='border-2 border-pink-600 bg-white px-2 py-1 ' onClick={handlenav}><RiMenu3Fill /> </button>
                </div>

            </div>

            <div className={`w-full h-screen bg-transparent absolute inset-0 z-50 ${open ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500`}>
                <div className={`h-full ${theme === 'light' ? 'bg-white' : 'bg-dark'} w-[70%] float-end p-4`}>
                    <div className="w-full flex items-center justify-between">
                        <button
                            className={`border-2 border-pink-600 px-2 py-1`}
                            onClick={handlenav}
                        >
                            <IoClose className="text-xl" />{" "}
                        </button>
                        <ThemeTogglerButton />
                    </div>

                    <div className="w-full flex flex-col items-start pt-10">
                        <Link to={"/"} className={`text-size ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}>
                            Home
                        </Link>
                        <Link
                            to={"/breast-cancer"}
                            className={`text-size   ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}
                        >
                            Breast Cancer Awareness
                        </Link>
                        <Link
                            to={"/cancer-glossery"}
                            className={`text-size  ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}
                        >
                            Cancer Glossary
                        </Link>
                        <Link
                            to={"/contact-us"}
                            className={`text-size  ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}
                        >
                            Contact Us
                        </Link>
                        <Link
                            to={"/startquestionnaire"}
                            className="bg-pink-600 px-5 mt-4 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all"
                        >
                            Start Questionnaire
                        </Link>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar2