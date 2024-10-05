import { CategoriasListContenedor } from '../Components/CategoriasListContenedor/CategoriasListContenedor';

export const Home = () => {
    return (
        <div className="cuerpo">
            <h1>Conocé Kaia</h1>
            <div className="promosContainer">
                <p>Promos</p>
            </div>
            <CategoriasListContenedor />
        </div>
    );
};