import { CartItem } from "./CartItem/CartItem";
import { Loader } from "../Shared/Loader/Loader";
import "./CartItemList.css"

export const CartItemList = ({ items }) => {
    return (
        <div className="CartItemList">
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