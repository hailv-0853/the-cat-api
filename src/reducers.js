import { combineReducers } from 'redux';
import {
  CHANGE_LIMIT,
  CHANGE_CATEGORY,
  CHANGE_ORDER,
  CHANGE_BREED,
  GET_CAT,
  CHANGE_PAGE,
  GET_TOTAL_CAT_NUMBER,
  GET_ONE_CAT,
} from './constants';

let initialState = {
  cats: [],
  limit: 4,
  order: 'RANDOM',
  category_ids: '',
  breed_ids: '',
  page: 0,
  totalCatNumber: 0,
  cat: {},
};

const catReducer = (state = initialState, action) => {
  if (localStorage.getItem('catStore')) {
    initialState = JSON.parse(localStorage.getItem('catStore'));
  }

  switch (action.type) {
    case GET_ONE_CAT:
      return {
        ...state,
        cat: action.payload,
      };
    case GET_CAT:
      return {
        ...state,
        cats: action.payload,
      };
    case CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case CHANGE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        category_ids: action.payload,
      };
    case CHANGE_BREED:
      return {
        ...state,
        breed_ids: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case GET_TOTAL_CAT_NUMBER:
      return {
        ...state,
        totalCatNumber: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({ catStore: catReducer });
