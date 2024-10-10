import { CheckoutItem } from "./CheckoutItem/CheckoutItem";
import { Loader } from "../Shared/Loader/Loader";

export const CheckoutItemList = ({ items }) => {
    return (
        <div className="CheckoutItemList">
            {items.length > 0 ? (
                items.map(item => (
                    <CheckoutItem key={item.id} {...item} />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};