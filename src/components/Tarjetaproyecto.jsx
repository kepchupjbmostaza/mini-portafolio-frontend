function TarjetaProyecto({ titulo, descripcion, enlace }) {
    return (
    <article>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a href={enlace} target="_blank" rel="noopener noreferrer">
        Ver proyecto
        </a>
    </article>
);
}

export default TarjetaProyecto;