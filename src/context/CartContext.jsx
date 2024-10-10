import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItemIndex = cart.findIndex(prod => prod.id === item.id);

        if (existingItemIndex > -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart(prev => [...prev, { ...item, quantity }]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (itemID) => {
        const updatedCart = cart.filter(prod => prod.id !== itemID);
        setCart(updatedCart);
    };

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0).toFixed(2);

    const increaseQuantity = (item) => {
        addItem(item, 1);
    };

    const decreaseQuantity = (item) => {
        const existingItem = cart.find(prod => prod.id === item.id);
        if (existingItem) {
            if (existingItem.quantity > 1) {
                addItem(item, -1);
            } else {
                removeItem(item.id);
            }
        }
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, totalQuantity, total, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};