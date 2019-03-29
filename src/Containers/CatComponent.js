import React, { Component, Fragment } from "react";
import CatPresentationalComponent from "../Presentations/CatComponent";

import { getOneCat } from '../CatAPI';

class CatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {},
      isNotFound: false
    };
  }

  componentDidMount() {
    getOneCat(this.props.match.params.id)
      .then(result => {
        this.setState({
          cat: result.data
        });
      })
      .catch( () =>
        this.setState({
          isNotFound: !this.state.isNotFound
        })
      );
  }

  showCat = ({ url, categories, id, breeds }) => {
    if (
      JSON.stringify(this.state.cat) === JSON.stringify({}) &&
      this.state.isNotFound
    ) {
      return <h2>NOT FOUND</h2>;
    }

    if (JSON.stringify(this.state.cat) !== JSON.stringify({})) {
      return (
        <CatPresentationalComponent
          url={url}
          categories={categories}
          id={id}
          breeds={breeds}
        />
      );
    }
  };

  render() {
    const {
      showCat,
      state: { cat }
    } = this;
    return <Fragment>{showCat(cat)}</Fragment>;
  }
}

export default CatComponent;
