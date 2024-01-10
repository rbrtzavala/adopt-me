import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBundary";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">
          🐶
        </h2>
      </div>
    )
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <h1>
        {pet.name}
      </h1>
      <h2>
      {`${pet.animal[0].toUpperCase() + pet.animal.slice(1)} - ${pet.breed} - ${pet.city}, ${pet.state}`}
      </h2>
      <button>
        Adopt {pet.name}
      </button>
      <p>
        {pet.description}
      </p>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

// export default Details;
export default DetailsErrorBoundary;