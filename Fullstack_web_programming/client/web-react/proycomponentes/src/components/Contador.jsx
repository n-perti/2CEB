import { useState } from "react";


const Contador = ({ informaResultado }) => {
     const [numero, setNumero] = useState(0);

     const habdleClick = () => {
            setNumero(numero + 1);
     }

        return (
            <>
            <h2>{numero}</h2>
            <p>El valor del contador es: {numero}</p>
            <button onClick={habdleClick}>Incrementar</button>
            <button onClick={(event) => informaResultado(numero)}>Informa Resultado</button>
            </>
        )
}

export default Contador;