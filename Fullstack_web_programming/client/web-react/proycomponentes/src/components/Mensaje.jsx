import { useEffect, useState } from 'react';

export default function Mensaje() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log(`${num} ha cambiado`);
    }, [num]);

    return (
        <div>
            <h3>Número</h3>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>Incrementar</button>
        </div>
    )
}