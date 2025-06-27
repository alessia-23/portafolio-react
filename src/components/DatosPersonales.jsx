function DatosPersonales() {
    return (
        <section className="datos-personales">
            <h2>Datos Personales</h2>
            <div className="datos">
                <div className="dato">
                    <div className="emoji">📄</div>
                    <p><strong>Cédula:</strong><br /> 1750048942</p>
                </div>
                <div className="dato">
                    <div className="emoji">🎂</div>
                    <p><strong>Edad:</strong><br /> 19 años</p>
                </div>
                <div className="dato">
                    <div className="emoji">🏙️</div>
                    <p><strong>Ciudad:</strong><br /> Quito</p>
                </div>
                <div className="dato">
                    <div className="emoji">🇪🇨</div>
                    <p><strong>Nacionalidad:</strong><br /> Ecuatoriana</p>
                </div>
                <div className="dato">
                    <div className="emoji">⚧️</div>
                    <p><strong>Género:</strong><br /> Femenino</p>
                </div>
            </div>
        </section>
    );
}

export default DatosPersonales;
