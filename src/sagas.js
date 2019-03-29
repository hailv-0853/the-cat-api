import { put, call, takeLatest } from 'redux-saga/effects';

import { getCatList, getOneCat } from './APICalls/CatAPI';

import errorHandler from './errorHandler';

import { getCat, getTotalCatNumber, getOnlyCat } from './actions';

import { FETCH_CAT, FETCH_ONE_CAT } from './constants';

function* fetchCatList({ payload }) {
  try {
    const result = yield call(getCatList, payload);
    yield put(getCat(result.data));
    yield put(getTotalCatNumber(result.headers['pagination-count']));
  } catch (e) {
    errorHandler(e);
  }
}

function* fetchOneCat({ payload }) {
  try {
    const result = yield call(getOneCat, payload);
    yield put(getOnlyCat(result.data));
  } catch (e) {
    errorHandler(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_CAT, fetchCatList);
  yield takeLatest(FETCH_ONE_CAT, fetchOneCat);
}
