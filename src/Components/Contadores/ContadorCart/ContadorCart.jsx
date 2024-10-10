import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const ContadorCart = ({ product, initial }) => {
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const increase = () => {
        if (product.stock > initial) {
            increaseQuantity(product);
        }
    };

    const decrease = () => {
        if (initial > 0) {
            decreaseQuantity(product);
        }
    };

    return (
        <div className="contadorCart">
            <button onClick={decrease} className="boton">-</button>
            <span>{initial}</span>
            <button onClick={increase} className="boton">+</button>
        </div>
    );
};