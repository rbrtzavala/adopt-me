import { Pet as PetType } from "./APIResponsesTypes";
import Pet from "./Pet";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    // <div className="search">
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            name={pet.name}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
