import React, { Component } from "react";
import { connect } from "react-redux";

import { changeLimit, changeOrder, changeCategory } from "../actions";
import { CHANGE_LIMIT, CHANGE_ORDER, CHANGE_CATEGORY } from "../constants";
import PresentationalHeader from "../Presentations/Header";

class Header extends Component {
  onChangeLimit = e => {
    this.props.dispatchChangeLimit(e.target.value);
  };

  onChangeOrder = e => {
    this.props.dispatchChangeOrder(e.target.value);
    window.location.search = "";
  };

  onChangeCategory = e => {
    this.props.dispatchChangeCategory(e.target.value);
    window.location.search = "";
  };
  render() {
    const {
      onChangeLimit,
      onChangeOrder,
      onChangeCategory,
      props: { limit, order, category_ids, totalCatNumber }
    } = this;
    const totalPage = Math.ceil(totalCatNumber / limit);
    const getDefaultValue = FILTER_TYPE => {
      switch (FILTER_TYPE) {
        case CHANGE_LIMIT:
          return limit;
        case CHANGE_ORDER:
          return order;
        case CHANGE_CATEGORY:
          return category_ids;
        default:
          return;
      }
    };

    const getFilterHandler = FILTER_TYPE => {
      switch (FILTER_TYPE) {
        case CHANGE_LIMIT:
          return onChangeLimit;
        case CHANGE_ORDER:
          return onChangeOrder;
        case CHANGE_CATEGORY:
          return onChangeCategory;
        default:
          return;
      }
    };

    return (
      <PresentationalHeader
        order={order}
        totalPage={totalPage}
        getFilterHandler={getFilterHandler}
        getDefaultValue={getDefaultValue}
      />
    );
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
  dispatchChangeLimit: payload => dispatch(changeLimit(payload)),
  dispatchChangeOrder: payload => dispatch(changeOrder(payload)),
  dispatchChangeCategory: payload => dispatch(changeCategory(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Header);
