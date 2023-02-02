import React from "react";
import CarCard from "../carCard/CarCard";

const CarList = ({ cars }) => {
  return (
    <div>
      {cars.map((el) => (
        <CarCard car={el} key={el.id} />
      ))}
    </div>
  );
};

export default CarList;
