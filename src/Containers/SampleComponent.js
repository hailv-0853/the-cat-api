import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import { getCat, changePage, getTotalCatNumber, fetchCat } from "../actions";

import SamplePresentationalComponent from "../Presentations/SampleComponent";

class SampleComponent extends Component {
  page = parseInt(queryString.parse(this.props.location.search).page) || 1;

  componentDidMount() {
    this.page =
      parseInt(queryString.parse(this.props.location.search).page) || 1;
    this.props.dispatchChangePage(this.page);
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    prevProps.limit !== this.props.limit && this.fetchData();
    prevProps.order !== this.props.order && this.fetchData();
    prevProps.category_ids !== this.props.category_ids && this.fetchData();
    this.page =
      parseInt(queryString.parse(this.props.location.search).page) || 1;
    this.props.dispatchChangePage(this.page);
    prevProps.page !== this.props.page && this.fetchData();
  }

  fetchData = () => {
    const {
      limit,
      order,
      category_ids,
      dispatchGetCat,
      dispatchGetTotalCatNumber,
      dispatchFetchCat,
      page,
    } = this.props;

    const payload = {
      params: {
        limit: limit,
        order: order,
        category_ids: category_ids,
        page: page - 1,
      }
    };

    let isLoading = true;

    dispatchFetchCat(payload);
  }

  render() {
    const { cats } = this.props;

    return <SamplePresentationalComponent cats={cats} />;
  }
}

const mapStateToProps = store => {
  let newCatStore = {
    ...store.catStore,
    cats: []
  };

  // Save data to localStorage in reducer
  localStorage.setItem("catStore", JSON.stringify(newCatStore));
  return store.catStore;
};

const mapDispatchToProp = dispatch => ({
  dispatchGetCat: payload => dispatch(getCat(payload)),
  dispatchChangePage: payload => dispatch(changePage(payload)),
  dispatchGetTotalCatNumber: payload => dispatch(getTotalCatNumber(payload)),
  dispatchFetchCat: payload => dispatch(fetchCat(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(SampleComponent);
