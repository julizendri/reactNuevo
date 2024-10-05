import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { ProductoList } from '../Components/ProductoList/ProductoList';
import { useParams } from 'react-router-dom';

export const CategoriasProductos = () => {
    const { categoriaId } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const productosCollection = collection(db, 'productos');
            const productoSnapshot = await getDocs(productosCollection);
            const productoList = productoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            const productosFiltrados = productoList.filter(producto => producto.category === categoriaId);
            setProductos(productosFiltrados);
        };

        fetchProductos();
    }, [categoriaId]);

    return (
        <div className="cuerpo">
            <h1>{categoriaId}</h1>
            <ProductoList productos={productos} />
        </div>
    );
};