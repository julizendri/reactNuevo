import { CartItem } from "./CartItem/CartItem";
import { Loader } from "../Shared/Loader/Loader";

export const CartItemList = ({ items }) => {
    return (
        <div className="ProductosList">
            {items.length > 0 ? (
                items.map(item => (
                    <CartItem key={item.id} {...item} />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};