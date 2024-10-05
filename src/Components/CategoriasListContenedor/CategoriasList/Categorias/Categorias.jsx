import { Link } from 'react-router-dom';

export const Categorias = ({ category }) => {
    return (
            <Link className="categoriaItem" to={`/productos/${category.name}`}>
                <h3>{category.name}</h3>
            <img className='imgCategorias' src={category.image} alt={`${category.name} imagen`} />
            <p>{category.description}</p>
                <p className='verMas'>Ver Más</p>
            </Link>
    );
};