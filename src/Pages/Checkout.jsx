import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CheckoutItemList } from '../Components/CheckoutItemList/CheckoutItemList';

export const Checkout = () => {
    const { total } = useContext(CartContext);

    return (
        <div className="cuerpo">
            <h1>Checkout</h1>
            <CheckoutItemList />
            <h2>Total: ${total}</h2>
            <button className="boton">Finalizar Compra</button>
        </div>
    );
};