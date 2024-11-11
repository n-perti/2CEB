import { useEffect, useState } from "react";
import PersonDetail from "./PersonDetail";

export default function Peoplelist() {
    const [people, setPeople] = useState([]);
    const [url, setUrl] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
            .then((response) => response.json())
            .then((data) => setPeople(data.results), console.log(people))
            .catch(error => {
                console.error('Error fetching data',error, url);
                setError(true);
            });
    }, [])
    
    const handleUrlChange = (newUrl) => {
        setUrl(newUrl);
    };
    return (
        <div>
            <h3>Lista de Personas</h3>
            {people.map(person => (
                <div key={person.url}>
                    <h3 onClick={() => handleUrlChange(person.url)}>{person.name}</h3>
                    <p>{person.birth_year}</p>
                    <p>{person.films.lenght}</p>
                </div>
            ))}
            <div>
                <PersonDetail url={url} />
            </div>
        </div>
    )
}

