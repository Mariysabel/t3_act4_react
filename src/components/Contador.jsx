import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    return (
        <div className="contador">
            <h2>Califica mi perfil</h2>

            <p className="valorContador">{contador}</p>

            <div className="botonesContador">
                <button onClick={() => setContador(contador + 1)}>
                    +
                </button>

                <button onClick={() => setContador(contador - 1)}>
                    -
                </button>
            </div>

            <button className="botonMostrar" onClick={() => setMostrar(true)}>
                Mostrar puntaje
            </button>

            {mostrar && (
                <label className="etiquetaPuntaje">
                    Puntaje obtenido: {contador}
                </label>
            )}
        </div>
    );
}

export default Contador;