import { useState } from "react";

const EligeBoton = () => {
    const [mensaje, setMensaje] = useState("No has elegido ningún botón");

    const handleClick = (num) => {
        setMensaje(`Has elegido el botón ${num}`);
    }

    return (
        <div>
            <h2>Elige un botón</h2>
            <p>{mensaje}</p>
            <button onClick={() => handleClick(1)}>Botón 1</button>
            <button onClick={() => handleClick(2)}>Botón 2</button>
            <button onClick={() => handleClick(3)}>Botón 3</button>
        </div>
    );
}

export default EligeBoton;