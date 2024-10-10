import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { ContadorCart } from "../../Contadores/ContadorCart/ContadorCart";

export const CartItem = ({ id, img, nombre, precio, quantity }) => {
    const { removeItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className="cart-item">
            <h2>{nombre}</h2>
            <img className="imagenCheckout" src={img} alt={nombre} />
            <p>Precio: ${precio}</p>

            <ContadorCart 
                quantity={quantity}
                onIncrease={() => increaseQuantity({ id, img, nombre, precio })}
                onDecrease={() => decreaseQuantity({ id, img, nombre, precio })}
            />

            <button onClick={() => removeItem(id)} className="boton">Eliminar</button>
        </div>
    );
};