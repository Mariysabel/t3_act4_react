import { useState } from "react";

function Skills(){
    const arregloNotas = [
        {
            id: crypto.randomUUID(),
            text: "Desarrollo web",
        },
        {
            id: crypto.randomUUID(),
            text: "Desarrollo movil",
        },
        {
            id: crypto.randomUUID(),
            text: "Bases de datos",
        }
    ]
    
    const [notas, setNotas] = useState(arregloNotas);

    return (
        <>
            <h2>Mis habilidades</h2>
            <ul>
                {notas.map(nota => <li key={nota.id}>{nota.text}</li>)}
            </ul>
        </>
    )
}

export default Skills;