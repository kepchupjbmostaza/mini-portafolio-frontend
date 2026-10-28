import TarjetaProyecto from "../components/Tarjetaproyecto";

const proyectos = [
    {
    titulo: "Mapa de optimización de rutas en Japón",
    descripcion: "Este proyecto consiste en un mapa interactivo que permite a los usuarios optimizar sus rutas de viaje en Japón. Utiliza algoritmos de optimización y se hizo uso de herramientas como tkinter, matplotlib y networkx. Este proyecto fue desarrollado en grupos, en el cual ayudé ampliamente con el desarrollo del mismo, sobre todo a la hora de crear el algoritmo",
    enlace: "https://github.com/jramos-byte/mate-discreta.git",
    },
    {
    titulo: "Modelo Beta de portafolio personal",
    descripcion: "Consiste en una versión temprana de un portafolio personal, el cual fue desarrollado utilizando HTML y CSS.",
    enlace: "https://github.com/kepchupjbmostaza/Portafolio-Personal.git",
    },
];

function Proyectos() {
    return (
    <section>
        <h1>Proyectos</h1>
        <div>
        {proyectos.map((proyecto) => (
            <TarjetaProyecto
            key={proyecto.titulo}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
            />
        ))}
        </div>
    </section>
);
}

export default Proyectos;