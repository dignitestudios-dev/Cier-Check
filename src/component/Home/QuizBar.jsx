import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'
export default function QuizBar() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='py-8'>

    
    <div className={` flex flex-col items-center justify-center text-center gap-6 py-12  horizontal-padding  ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-dark'}`} >
      <div className={`w-full flex flex-col gap-6   rounded  `}>
        <h2 className='text-center section-heading' >Not sure which routine is right for you? <br />Take our skin quiz!</h2>
        <div className='mt-7' >
          <NavLink to={'/startquestionnaire'} className='bg-pink-600 px-5 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all'>Take the quiz</NavLink>
        </div>
      </div>

    </div>
    </div>
  )
}
