import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { CategoriasList } from './CategoriasList/CategoriasList';
import "./CategoriasListContenedor.css"

export const CategoriasListContenedor = () => {
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
        <div className="categoriasListContenedor">
            {categories.length > 0 ? (
                <CategoriasList categories={categories} />
            ) : (
                <span>Cargando categorias...</span>
            )}
        </div>
    );
};