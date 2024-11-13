import { useState } from "react";
import SuccessMessage from "./SuccessMessage";

function AdoptionForm({pet}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, phone, email, message, pet});
        setIsSubmitted(true);
    };

    return (
        <div>
            {isSubmitted ? (
                <SuccessMessage pet={pet}/>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Teléfono:
                        <input
                            type="tel"
                            value={phone}
                            required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Mensaje:
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <br />
                    <br style={{margin: '10 px'}}/>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
}

export default AdoptionForm;