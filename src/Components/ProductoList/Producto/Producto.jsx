import { Link } from 'react-router-dom';

export const Producto = ({ producto }) => {
    return (
        <div className="productoCard">
            <h3>{producto.name}</h3>
            <img className='imgCategorias' src={producto.image} alt={`${producto.name} imagen`} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <Link className='verMas' to={`/productos/${producto.category}/${producto.id}`}>Ver Detalle</Link>
        </div>
    );
};