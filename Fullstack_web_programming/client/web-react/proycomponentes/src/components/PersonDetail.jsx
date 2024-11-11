import { useEffect, useState } from "react";

export default function PersonDetail({ url }) {
    const [person, setPerson] = useState(null);
    

    async function fetchData() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPerson(data);
        } catch (error) {
            console.log('Error fetching data', error);
        }
    }

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);

        useEffect(() =>  {
            if (url) {
                fetchData();
            }
        }, [url]);

        if (!person) {
            return <p>Selecciona una persona</p>
        }
        else {
            return (
                <div>
                    <h3>{person.name}</h3>
                </div>
            )
        }

}

