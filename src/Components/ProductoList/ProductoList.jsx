import { Producto } from "./Producto/Producto";
import "./ProductoList.css"

export const ProductoList = ({ productos }) => {
    return (
        <div className="ProductosList">
            {productos.length > 0 ? (
                productos.map(producto => (
                    <Producto key={producto.id} producto={producto} />
                ))
            ) : (
                <p>No hay productos en esta categoría.</p>
            )}
        </div>
    );
};