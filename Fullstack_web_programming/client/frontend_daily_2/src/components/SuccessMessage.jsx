import Confetti from 'react-confetti';

const SuccessMessage = ({pet}) => {
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <div style={{ textAlign: 'center', marginTop: '20%' }}>
                <h1>Adoption Successful!</h1>
                <p>Congratulations on your new addition to the family!</p>
                <p>You have adopted {pet.nombre}.</p>
                <img style={{ width: '450px', height: 'auto' }} src={pet.imagen} alt="pet_img" />
            </div>
        </div>
    );
};

export default SuccessMessage;