function SobreMi() {
    const intereses = ["Programación", "Automatización", "Inteligencia Artificial"];

return (
    <section>
    <h1>Sobre mí</h1>
    <p>Soy estudiante de primer año de Ingeniería en Informática</p>
    <p>Mi principal objetivo es desarrollar mis habilidades en programación y automatización</p>
    <h2>Intereses</h2>
    <ul>
        {intereses.map((interes) => (
        <li key={interes}>{interes}</li>
        ))}
    </ul>
    </section>
);
}

export default SobreMi;
