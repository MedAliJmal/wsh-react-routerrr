import React from "react";
import { useParams } from "react-router-dom";

const Price = ({ cars }) => {
  const params = useParams();
  console.log(params.id);
  const car = cars.find((el) => el.id === Number(params.id));
  console.log(car);
  return (
    <div>
      <h1>
        {car.brand} costs {car.price}
      </h1>
    </div>
  );
};

export default Price;
