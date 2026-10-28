import { Link } from "react-router-dom";

function Inicio() {
return (
    <section>
    <h1>Alonso Astete</h1>
    <h2>Estudiante de Ingeniería en Informática</h2>
    <p>Bienvenido a mi mini portafolio profesional</p>
    <Link to="/proyectos">Explorar</Link>
    </section>
);
}

export default Inicio;

