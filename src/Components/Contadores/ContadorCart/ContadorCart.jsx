export const ContadorCart = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="contadorCart">
            <button onClick={onDecrease} className="boton">-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease} className="boton">+</button>
        </div>
    );
};