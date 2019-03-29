import React from 'react';

import PropTypes from 'prop-types';

const CatPresentationalComponent = ({
  url, id, categories, breeds,
}) => (
  <div className="cat">
    <a href={url}>
      <img src={url} alt="" />
    </a>
    <div>
      Cat ID:
      {' '}
      {id}
    </div>
    <div>
      Cat Image URL:
      {' '}
      <a href={url}>
        {url}
      </a>
    </div>
    {categories && (
      <div>
        Categories:
        {' '}
        {categories.map(category => category.name)}
      </div>
    )}
    {breeds && (
      <div>
        Breed:
        {' '}
        <a href={breeds[0].wikipedia_url}>{breeds[0].name}</a>
      </div>
    )}
  </div>
);

CatPresentationalComponent.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  breeds: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CatPresentationalComponent;
