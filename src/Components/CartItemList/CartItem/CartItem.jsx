import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { ContadorCart } from "../../Contadores/ContadorCart/ContadorCart";

export const CartItem = ({ id, image, name, price, quantity, stock }) => {
    const { removeItem } = useContext(CartContext);

    const producto = {
        id: id,
        image: image,
        name: name,
        price: price,
        quantity: quantity,
        stock: stock
    };

    return (
        <div className="cartItem">
            <h2>{name}</h2>
            <img className="imagenCheckout" src={image} alt={name} />
            <p>Precio: ${price}</p>

            <ContadorCart
                product={producto}
                initial={quantity}
            />

            <button onClick={() => removeItem(id)} className="boton">Eliminar</button>
        </div>
    );
};