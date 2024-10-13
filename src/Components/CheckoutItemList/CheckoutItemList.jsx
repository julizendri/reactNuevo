import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CheckoutItem } from './CheckoutItem/CheckoutItem';
import { NoProductos } from '../Shared/NoProducts/NoProducts';
import "./CheckoutItemList.css"

export const CheckoutItemList = () => {
    const { cart, total } = useContext(CartContext);

    return (
        <div className="checkoutItemList">
            {cart.length === 0 ? (
                <NoProductos/>
            ) : (
                cart.map(item => (
                    <div className='ListaCheckout'>
                        <CheckoutItem key={item.id} item={item} />
                    </div>
                ))
            )}
            <h2>Total: ${total}</h2>
            <button className="botonFinalizar" disabled={cart.length === 0}>Finalizar Compra</button>
        </div>
    );
};