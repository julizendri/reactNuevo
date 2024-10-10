import { Link } from 'react-router-dom';
import { ContadorCart } from '../../Contadores/ContadorCart/ContadorCart';
import { CartContext } from '../../../context/CartContext';
import { useContext } from 'react';

export const Producto = ({ producto }) => {
    const { cart } = useContext(CartContext);

    const cartItem = cart.find(item => item.id === producto.id);
    
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="productoCard">
            <h3>{producto.name}</h3>
            <img className='imgCategorias' src={producto.image} alt={`${producto.name} imagen`} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <Link className='verMas' to={`/productos/${producto.category}/${producto.id}`}>Ver Detalle</Link>
            <ContadorCart 
                product={producto}
                initial={quantity}
            />
        </div>
    );
};