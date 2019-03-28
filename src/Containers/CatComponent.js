import React, { Component, Fragment } from "react";
import axios from "axios";
import CatPresentationalComponent from "../Presentations/CatComponent";

class CatComponent extends Component {
  state = {
    cat: {},
    isNotFound: false
  };
  componentDidMount() {
    axios
      .request({
        url:
          "https://api.thecatapi.com/v1/images/" + this.props.match.params.id,
        headers: { "x-api-key": "cd150a09-8706-4b10-aa13-ba50d1219cfc" }
      })
      .then(result => {
        this.setState({
          cat: result.data
        });
      })
      .catch(err =>
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
