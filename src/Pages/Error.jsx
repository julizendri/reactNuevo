import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <div className="paginaError">
            <h1>404 NOT FOUND</h1>
            <Link className="textoError" to='/'>Volver al Inicio</Link>
        </div>
    )
}