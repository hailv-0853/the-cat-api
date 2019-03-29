import {
  CHANGE_LIMIT,
  CHANGE_ORDER,
  CHANGE_CATEGORY,
  CHANGE_BREED,
  GET_CAT,
  CHANGE_PAGE,
  GET_TOTAL_CAT_NUMBER,
  FETCH_CAT,
  GET_ONE_CAT,
  FETCH_ONE_CAT,
} from './constants';

export const getCat = payload => ({
  type: GET_CAT,
  payload,
});

export const getOnlyCat = payload => ({
  type: GET_ONE_CAT,
  payload,
});

export const changeLimit = payload => ({
  type: CHANGE_LIMIT,
  payload,
});

export const changeOrder = payload => ({
  type: CHANGE_ORDER,
  payload,
});

export const changeCategory = payload => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const changeBreed = payload => ({
  type: CHANGE_BREED,
  payload,
});

export const changePage = payload => ({
  type: CHANGE_PAGE,
  payload,
});

export const getTotalCatNumber = payload => ({
  type: GET_TOTAL_CAT_NUMBER,
  payload,
});

export const fetchCat = payload => ({
  type: FETCH_CAT,
  payload,
});

export const fetchOneCat = payload => ({
  type: FETCH_ONE_CAT,
  payload,
});
