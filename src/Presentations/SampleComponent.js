import React from "react";
import { Link } from "react-router-dom";

const SamplePresentationalComponent = ({ cats }) => {
  return (
    <div className="cat-image-holder">
      {cats.map(cat => (
        <div className="cat-image" key={cat.id}>
          <Link to={`/cat/${cat.id}`}>
            <img src={cat.url} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SamplePresentationalComponent;
