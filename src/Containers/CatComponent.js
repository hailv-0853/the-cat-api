import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import CatPresentationalComponent from "../Presentations/CatComponent";
import { fetchOneCat } from '../actions';

class CatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotFound: false
    };
  }

  componentDidMount() {
    const { dispatchFetchOneCat } = this.props;
    const payload = this.props.match.params.id;
    dispatchFetchOneCat(payload);
  }

  componentDidUpdate() {
  }

  showCat = ({ url, categories, id, breeds }) => {
    const { cat } = this.props;
    if (
      JSON.stringify(cat) === JSON.stringify({}) &&
      this.state.isNotFound
    ) {
      return <h2>NOT FOUND</h2>;
    }

    if (JSON.stringify(cat) !== JSON.stringify({})) {
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
      props: { cat }
    } = this;
    return <Fragment>{showCat(cat)}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {cat: state.catStore.cat};
};

const mapDispatchToProp = dispatch => ({
  dispatchFetchOneCat: payload => dispatch(fetchOneCat(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CatComponent);
