import { Link } from "react-router-dom";

const Pet = (props) => {
  const { animal, breed, id, images, location, name } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    // <Link to={`/details/${id}`} className="pet">
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>

      {/* <div className="info"> */}
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
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
