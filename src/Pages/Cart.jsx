import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { total, totalQuantity, clearCart } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="cuerpo">
                <h1>No hay productos en el carrito</h1>
                <Link to='/productos'>Ver Productos</Link>
                <Link to='/'>Ir al Inicio</Link>
            </div>
        );
    }

    return (
        <div className="cuerpo">
            <h2>Tu Carrito</h2>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
    );
};