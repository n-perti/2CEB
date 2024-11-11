import { useState } from "react";

const Suma = (num1, num2) => {
    const [resultado, setResultado] = useState(0);

    const sumar = (num1, num2) => {
        setResultado(num1 + num2);
    }

    return (
        <div>
            <h2>Suma</h2>
            <p>Resultado: {resultado}</p>
            <button onClick={() => sumar(1, 2)}>Sumar 1 + 2</button>
            <button onClick={() => sumar(3, 4)}>Sumar 3 + 4</button>
            <button onClick={() => sumar(5, 6)}>Sumar 5 + 6</button>
        </div>
    )
};

export default Suma;