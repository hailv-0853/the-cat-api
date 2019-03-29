import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import CatPresentationalComponent from "../Presentations/CatComponent";
import { fetchOneCat } from '../actions';

class CatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: this.props.cat,
      isNotFound: false
    };
  }

  componentDidMount() {
    const { dispatchFetchOneCat } = this.props;
    // getOneCat(this.props.match.params.id)
    //   .then(result => {
    //     this.setState({
    //       cat: result.data
    //     });
    //   })
    //   .catch( () =>
    //     this.setState({
    //       isNotFound: !this.state.isNotFound
    //     })
    //   );
    const payload = this.props.match.params.id;
    dispatchFetchOneCat(payload);
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
    return <div></div>;
    // return <Fragment>{showCat(cat)}</Fragment>;
  }
}

const mapStateToProps = state => {
  console.log(state.catStore.cat);
  return {cat: state.catStore.cat};
};

const mapDispatchToProp = dispatch => ({
  dispatchFetchOneCat: payload => dispatch(fetchOneCat(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CatComponent);
