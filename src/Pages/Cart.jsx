import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CartItemList } from '../Components/CartItemList/CartItemList';


export const Cart = () => {
    const { cart, total, totalQuantity, clearCart } = useContext(CartContext);

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
            <h1>Tu Carrito</h1>
            <CartItemList items={cart} />
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} className='LimpiarCarrito'>Limpiar Carrito</button>
            <Link className='CheckoutBoton' to={'/checkout'}>Checkout</Link>
        </div>
    );
};