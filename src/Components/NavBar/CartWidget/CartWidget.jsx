import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to='/cart' className="cartWidget">
            <FaShoppingCart />
            {totalItems > 0 && (
                <span className="cartItemCount">{totalItems}</span>
            )}
        </Link>
    );
};