import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBundary";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("id required!");
  }

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const results = useQuery(["details", id], fetchPet);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐶</h2>
      </div>
    );
  }

  const pet = results?.data?.pets[0];
  if (!pet) {
    throw new Error("no pet lol");
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <h1>{pet.name}</h1>
      <h2>
        {`${pet.animal[0].toUpperCase() + pet.animal.slice(1)} - ${
          pet.breed
        } - ${pet.city}, ${pet.state}`}
      </h2>
      <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
      <p>{pet.description}</p>
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

// export default Details;
export default DetailsErrorBoundary;
