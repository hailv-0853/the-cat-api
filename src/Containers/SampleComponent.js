import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import { getCatList } from "../CatAPI";
import { getCat, changePage, getTotalCatNumber } from "../actions";

import SamplePresentationalComponent from "../Presentations/SampleComponent";

class SampleComponent extends Component {
  page = parseInt(queryString.parse(this.props.location.search).page) || 1;

  componentDidMount() {
    this.page =
      parseInt(queryString.parse(this.props.location.search).page) || 1;
    this.props.dispatchChangePage(this.page);
    this.fetchData(this.page);
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

  fetchData(page = this.props.page) {
    let {
      limit,
      order,
      category_ids,
      dispatchGetCat,
      dispatchGetTotalCatNumber
    } = this.props;
    let isLoading = true;

    getCatList({
      params: {
        limit: limit,
        order: order,
        category_ids: category_ids,
        page: page - 1
      }
    }).then(result => {
      dispatchGetTotalCatNumber(parseInt(result.headers["pagination-count"]));
      dispatchGetCat(result.data);
      isLoading = false;
    });
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
  localStorage.setItem("catStore", JSON.stringify(newCatStore));
  return store.catStore;
};

const mapDispatchToProp = dispatch => ({
  dispatchGetCat: payload => dispatch(getCat(payload)),
  dispatchChangePage: payload => dispatch(changePage(payload)),
  dispatchGetTotalCatNumber: payload => dispatch(getTotalCatNumber(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(SampleComponent);
