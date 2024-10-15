import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import "../Contador.css";

export const ContadorDetalle = ({ product, initial }) => {
    const { cart, addItem } = useContext(CartContext);
    const [count, setCount] = useState(initial);

    const getCurrentQuantityInCart = () => {
        const foundProduct = cart.find(item => item.id === product.id);
        return foundProduct ? foundProduct.quantity : 0;
    };

    const increase = () => {
        const currentQuantityInCart = getCurrentQuantityInCart();
        if (count + currentQuantityInCart < product.stock) {
            setCount(count + 1);
        }
    };

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        const currentQuantityInCart = getCurrentQuantityInCart();
        if (currentQuantityInCart + count <= product.stock) {
            addItem(product, count);
            setCount(initial);
        }
    };

    const isStockExceeded = getCurrentQuantityInCart() + count >= product.stock;
    
    const disableAddButton = count === 0 || getCurrentQuantityInCart() + count > product.stock;;

    return (
        <div className="contadorDetalle">
            <div className="contadorCart">
                <button onClick={decrease} className="botonMenos">-</button>
                <span>{count}</span>
                <button
                    onClick={increase}
                    className="botonMas"
                    disabled={isStockExceeded}
                >
                    +
                </button>
            </div>
            <button
                onClick={addToCart}
                className="botonAgregar"
                disabled={disableAddButton}
            >
                Agregar al carrito
            </button>
        </div>
    );
};