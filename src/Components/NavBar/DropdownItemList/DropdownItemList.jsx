import { DropdownItem } from "./DropdownItem/DropdownItem";
import { Loader } from "../../Shared/Loader/Loader";

export const DropdownItemsList = ({ categories }) => {
    if (categories.length === 0) {
        return <div className="dropdownContenido"><Loader /></div>;
    }

    return (
        <div className="dropdownContenido">
            {categories.map(cat => (
                <DropdownItem key={cat.id} category={cat} />
            ))}
        </div>
    );
};