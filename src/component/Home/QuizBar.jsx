import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'
export default function QuizBar() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='py-8'>

    
    <div className={` flex flex-col items-center justify-center text-center gap-6 py-16 Quiz-bg  horizontal-padding `} >
      
        <h2 className='text-center text-[36px] font-[600] px-56' >Your Support Can Save Lives Through Early Cancer Detection</h2>
        <div className='mt-4' >
          <button className='bg-white px-10 py-3 rounded-[100px] text-[#CF1D67] font-[600] '>Take the Quiz</button>
        </div>

    </div>
    </div>
  )
}
