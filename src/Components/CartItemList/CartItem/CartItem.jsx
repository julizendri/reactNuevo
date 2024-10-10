import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { ContadorCart } from "../../Contadores/ContadorCart/ContadorCart";

export const CartItem = ({ id, image, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="cartItem">
            <h2>{name}</h2>
            <img className="imagenCheckout" src={image} alt={name} />
            <p>Precio: ${price}</p>

            <ContadorCart
                product={{ id, image, name, price, quantity }}
                initial={quantity}
            />

            <button onClick={() => removeItem(id)} className="boton">Eliminar</button>
        </div>
    );
};