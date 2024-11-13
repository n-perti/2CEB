import PetCard from "./PetCard";

export default function PetList({ pets }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
}