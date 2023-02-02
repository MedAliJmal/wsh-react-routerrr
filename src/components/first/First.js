import React from "react";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div>
      this is the first component
      <Link to="/second">
        <h1>Go to second component</h1>
      </Link>
    </div>
  );
};

export default First;
