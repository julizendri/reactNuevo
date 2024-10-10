import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CheckoutItemList } from "../Components/CheckoutItemList/CheckoutItemList";

export const Checkout = () => {
    const { cart, total, totalQuantity, clearCart } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="cuerpo">
                <h1>No hay productos para terminar la compra</h1>
                <Link to='/productos'>Ver Productos</Link>
                <Link to='/'>Ir al Inicio</Link>
            </div>
        );
    }

    return (
        <div className="cuerpo">
            <h2>Tu Carrito</h2>
            <CheckoutItemList items={cart} />
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={clearCart}>Limpiar Carrito</button>
            <Link to={'/cart'}>Volver al Carrito</Link>
        </div>
    );
};