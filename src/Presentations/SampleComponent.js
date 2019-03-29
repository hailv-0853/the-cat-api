import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SamplePresentationalComponent = ({ cats }) => (
  <div className="cat-image-holder">
    {cats.map(cat => (
      <div className="cat-image" key={cat.id}>
        <Link to={`/cat/${cat.id}`}>
          <img src={cat.url} alt="" />
        </Link>
      </div>
    ))}
  </div>
);

SamplePresentationalComponent.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SamplePresentationalComponent;
