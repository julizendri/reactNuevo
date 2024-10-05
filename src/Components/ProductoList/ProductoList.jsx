import { Producto } from "./Producto/Producto";
import "./ProductoList.css"
import { Loader } from "../Shared/Loader/Loader";

export const ProductoList = ({ productos }) => {
    return (
        <div className="ProductosList">
            {productos.length > 0 ? (
                productos.map(producto => (
                    <Producto key={producto.id} producto={producto} />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};