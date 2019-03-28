import React from "react";

const CatPresentationalComponent = ({ url, id, categories, breeds }) => (
  <div className="cat">
    <a href={url}>
      <img src={url} />
    </a>
    <div>Cat ID: {id}</div>
    <div>
      Cat Image URL: <a href={url}>{url}</a>
    </div>
    {categories && (
      <div>Categories: {categories.map(category => category.name)}</div>
    )}
    {breeds && (
      <div>
        Breed: <a href={breeds[0]["wikipedia_url"]}>{breeds[0].name}</a>
      </div>
    )}
  </div>
);

export default CatPresentationalComponent;
