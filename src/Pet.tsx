import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

interface IProps {
  name: string;
  animal: Animal;
  breed: StaticRangeInit;
  images: string[];
  location: string;
  id: number;
}

const Pet = (props: IProps) => {
  const { animal, breed, id, images, location, name } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    // <Link to={`/details/${id}`} className="pet">
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>

      {/* <div className="info"> */}
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {`${
            animal[0].toUpperCase() + animal.slice(1)
          } - ${breed} - ${location}`}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
