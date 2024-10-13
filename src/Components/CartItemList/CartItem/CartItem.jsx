import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { ContadorCart } from "../../Contadores/ContadorCart/ContadorCart";

export const CartItem = ({ id, image, name, price, description, quantity, stock }) => {
    const { removeItem } = useContext(CartContext);

    const producto = {
        id: id,
        image: image,
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        stock: stock
    };

    return (
        <div className="cartItem">
            <img className="imagenCarrito" src={image} alt={name} />
            <div className="InfoCarrito">
                <h2 className="carritoName">{name}</h2>
                <p className="descriptionCarrito">{description}</p>
            </div>
            <div className="ContadorDiv">
            <p className="precioCarrito">Precio: ${price * quantity}</p>
                <ContadorCart
                    product={producto}
                    initial={quantity}
                />
                <button onClick={() => removeItem(id)} className="botonCarrito">Eliminar</button>
            </div>
        </div>
    );
};