import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {CheckoutItem} from './CheckoutItem/CheckoutItem';

export const CheckoutItemList = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="checkoutItemList">
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                cart.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            )}
        </div>
    );
};