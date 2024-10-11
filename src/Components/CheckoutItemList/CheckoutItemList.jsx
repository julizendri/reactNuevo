import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CheckoutItem } from './CheckoutItem/CheckoutItem';
import "./CheckoutItemList.css"

export const CheckoutItemList = () => {
    const { cart, total } = useContext(CartContext);

    return (
        <div className="checkoutItemList">
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                cart.map(item => (
                    <div>
                        <CheckoutItem key={item.id} item={item} />
                        <h2>Total: ${total}</h2>
                        <button className="botonFinalizar">Finalizar Compra</button>
                    </div>
                ))
            )}
        </div>
    );
};