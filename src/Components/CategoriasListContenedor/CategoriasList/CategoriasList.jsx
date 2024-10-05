import { Categorias } from './Categorias/Categorias';

export const CategoriasList = ({ categories }) => {
    return (
        <div className="categoriasList">
            {categories.map(cat => (
                <Categorias key={cat.id} category={cat} />
            ))}
        </div>
    );
};