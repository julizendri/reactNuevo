import { ContadorDetalle } from "../../Contadores/ContadorDetalle/ContadorDetalle";

export const ProductoDetalle = ({ producto }) => {
    return (
        <div className="productoDetalleCard">
            <img className="imgDetalle" src={producto.image} alt={producto.name} />
            <div className="detalleInfo">
                <h1 className="h1Detalle">{producto.name}</h1>
                <p className="descripcionDetalle">{producto.description}</p>
                <p className="precioDetalle">Precio: ${producto.price}</p>
                <ContadorDetalle className="CounterDetalle" product={producto} initial={1}/>
            </div>
        </div>
    );
};