export const CheckoutItem = ({ item }) => {

    return (
        <div className="checkoutItem">
            <img className="imgCheckout" src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${(item.quantity * item.price)}</p>
        </div>
    );
};