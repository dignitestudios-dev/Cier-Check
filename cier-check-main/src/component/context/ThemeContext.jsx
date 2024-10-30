import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [isDrawOpen, setDrawOpen] = useState(false)
    const [CartItemLeng, setCartItemLeng] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [state, setState] = useState(false)

    const toggleTheme = () => {
        if (theme == 'light') {
            setTheme('dark')
        } else {
            setTheme("light")
        }
    }



    const [products, setProducts] = useState([]);
    console.log("cartProducts >> ", products)

    const addProduct = (data) => {
        const productExists = products.find(p => p.id === data.id);
        setOpenDrawer(true)

        if (productExists) {
            const updatedProducts = products.map(p =>
                p.id === data.id ? { ...p, quantity: p.quantity + 1 } : p
            );
            setProducts(updatedProducts);
        } else {
            setProducts([...products, { ...data, quantity: 1 }]);
        }
    };

    const deleteTodo = (index) => {
        setProducts((prevTodos) => prevTodos.filter((_, i) => i !== index))
    }

    const toggleTodo = (index) => {
        setProducts((prevTodos) =>
            prevTodos.map((todo, idx) =>
                idx === index ? { ...todo, complete: !todo.complete } : todo
            )
        );

    };
    const calculateSubtotal = (price, quantity) => {
        // setSubTotalPrice(price * quantity)
        return price * quantity;
    };

    const getTotalPrice = () => {
        const price = products.reduce((total, product) => total + calculateSubtotal(product.price, product.quantity), 0);
        return price
    };

    const handleQuantityChange = (productId, newQuantity) => {
        setProducts(prevCart =>
            prevCart.map(product =>
                product.id === productId
                    ? { ...product, quantity: newQuantity }
                    : product
            )
        );
    };



    return (
        <ThemeContext.Provider value={{ openDrawer, setOpenDrawer, theme, toggleTheme, isDrawOpen, setDrawOpen, setCartItemLeng, state, setState, CartItemLeng, toggleTodo, getTotalPrice, handleQuantityChange, addProduct, deleteTodo, products, calculateSubtotal }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider