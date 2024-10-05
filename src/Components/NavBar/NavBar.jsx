import { NavLink, Link } from 'react-router-dom';
import { CartWidget } from './CartWidget/CartWidget';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { DropdownItemsList } from './DropdownItemList/DropdownItemList';
import './NavBar.css';

export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesCollection = collection(db, 'categories');
            const categorySnapshot = await getDocs(categoriesCollection);
            const categoryList = categorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCategories(categoryList);
        };

        fetchCategories();
    }, []);

    return (
        <nav className="NavBar">
            <Link to='/' className="ulLogo">
                <h3 className="logo">KAIA</h3>
            </Link>
            <div className="ulPages">
                <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
                <div className="dropdown">
                    <NavLink to='/Productos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                        Productos
                    </NavLink>
                    <DropdownItemsList categories={categories} />
                </div>

                <CartWidget />
            </div>
        </nav>
    )
}