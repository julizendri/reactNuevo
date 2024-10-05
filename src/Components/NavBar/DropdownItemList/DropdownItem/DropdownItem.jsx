import { Link } from 'react-router-dom';

export const DropdownItem = ({ category }) => {
    return (
        <Link to={`/productos/${category.name}`} className="dropdown-item">
            {category.name}
        </Link>
    );
};