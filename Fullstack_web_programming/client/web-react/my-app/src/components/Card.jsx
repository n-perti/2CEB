import '../styles/Card.css';

export default function Card({name, rol, email, phone}) {
    return (
        <div className="card">
            <h2 className='name'>{name}</h2>
            <p className='rol'>{rol}</p>
            <p className='email'>
                <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className='phone'>
                <a href={`tel:${phone}`}>{phone}</a>
            </p>
        </div>
    )
    }

