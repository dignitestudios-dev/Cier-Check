import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoon } from "react-icons/io5";

const ThemeTogglerButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <button type='button' onClick={toggleTheme}>{theme === "light" ? <TiWeatherSunny className={`text-3xl ${theme === "light" ? 'text-black' : 'text-white'}`} /> : <IoMoon className={`text-3xl ${theme === "light" ? 'text-black' : 'text-white'}`} />}</button>
    )
}

export default ThemeTogglerButton