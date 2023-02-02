import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div>
      <h1>{car.brand}</h1>
      <Link to={`/car/${car.id}`}>
        <button>View Price</button>
      </Link>
    </div>
  );
};

export default CarCard;
