import React, { useContext } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosSearch } from 'react-icons/io'
import { ThemeContext } from '../context/ThemeContext'

const HeroAdmin = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`${theme === "light" ? 'bg-slate-100' : 'bg-black'} py-20`}>
            <div className='w-full grid grid-cols-3 py-7 px-32 gap-5'>
                <div className={`col-span-2  flex flex-col p-4 md:p-10 gap-10 ${theme === "light" ? 'bg-slate-100' : 'bg-dark'}`}>
                    <div className='flex items-start justify-between '>
                        <h2 className='text-5xl font-bold pink-text'>admin</h2>
                        <CgProfile />
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <a href="">Hello world</a>
                        <div className=''>
                            <a href="">1 Comment /</a>
                            <a href=""> Uncategorized /</a>
                            <a href="">admin</a>
                        </div>
                        <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
                    </div>

                </div>
                <div className='flex flex-col gap-3'>
                    <div className={`bg-white p-10 ${theme === "light" ? 'bg-slate-100' : 'bg-dark'}`}>
                        <div className={`w-full flex items-center  justify-center py-2 ${theme === "light" ? 'bg-slate-100' : 'bg-black'}`}>
                            <input type="text" name="" id="" placeholder='search...' className='bg-transparent py-1 w-[80%] outline-none' />
                            <a href=""> <IoIosSearch /></a>
                        </div>
                    </div>
                    <div>

                        <div className={`w-full flex flex-col py-10 px-9 gap-5 ${theme === "light" ? 'bg-slate-100' : 'bg-dark'}`}>
                            <h3 className={`text-xl font-bold ${theme == "light" ? 'text-slate-500' : 'text-white'}`}>Recent Posts</h3>
                            <a href="" className='pink-text'>Hello world!</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroAdmin