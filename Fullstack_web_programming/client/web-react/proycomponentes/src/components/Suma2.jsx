import { useState } from "react";


function Suma2 ({numA, numB, sumaResuelta }) {
    const [resultado, setResultado ] = useState(0);

    const handleClick = () => {
        const resultado = numA + numB;  
        setResultado(resultado);
        sumaResuelta(resultado);
    }

    return (
        <>
            <h2>Suma de dos números</h2>
            <button onClick={handleClick}>Sumar</button>
            <p>El resultado de la suma  {numA} + {numB} es: {resultado}</p>
        </>
    )
}

export default Suma2;