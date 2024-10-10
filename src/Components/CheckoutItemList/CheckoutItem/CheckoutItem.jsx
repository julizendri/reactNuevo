export const CheckoutItem = ({ img, nombre, precio, quantity }) => {
    return (
        <div className="checkoutItem">
            <h2>{nombre}</h2>
            <img className="imagenCheckout" src={img} alt={nombre} />
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
        </div>
    );
};