import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const ContadorCart = ({ product, initial }) => { 
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const increase = () => {
        increaseQuantity(product);
    };

    const decrease = () => {
        decreaseQuantity(product);
    };

    return (
        <div className="contadorCart">
            <button onClick={decrease} className="boton">-</button>
            <span>{initial}</span>
            <button 
                onClick={increase} 
                className="boton" 
                disabled={initial >= product.stock}
            >
                +
            </button>        </div>
    );
};