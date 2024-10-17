import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [isDrawOpen, setDrawOpen] = useState(false)
    const [CartItemLeng, setCartItemLeng] = useState(0)

    const toggleTheme = () => {
        if (theme == 'light') {
            setTheme('dark')
        } else {
            setTheme("light")
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme,isDrawOpen,setDrawOpen,setCartItemLeng,CartItemLeng }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider