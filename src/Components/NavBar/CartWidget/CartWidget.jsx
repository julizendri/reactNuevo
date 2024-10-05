import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {

    return (
        <Link to='/cart'>
            <FaShoppingCart></FaShoppingCart>
            0
        </Link>
    )
}
