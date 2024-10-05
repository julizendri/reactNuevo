import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { ProductoDetalle } from './ProductoDetalle/ProductoDetalle';
import { Loader } from '../Shared/Loader/Loader';
import "./ProductoDetalle.css";

export const ProductoDetalleContenedor = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const productoRef = doc(db, 'productos', id);
                const productoSnap = await getDoc(productoRef);

                if (productoSnap.exists()) {
                    setProducto({ id: productoSnap.id, ...productoSnap.data() });
                } else {
                    console.log("El producto no existe");
                }
            } catch (error) {
                console.error("Error al obtener el producto: ", error);
            }
        };

        fetchProducto();
    }, [id]);

    return (
        <div className='ProductoDetalleContenedor'>
            {producto ? <ProductoDetalle producto={producto} /> : <Loader/>}
        </div>
    );
};