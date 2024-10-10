export const CheckoutItem = ({ item }) => {

    return (
        <div className="checkoutItem">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price.toFixed(2)}</p>
            </div>
        </div>
    );
};