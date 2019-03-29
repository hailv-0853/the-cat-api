import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import './styles.css';
import SampleComponent from './Containers/SampleComponent';
import CatComponent from './Containers/CatComponent';
import Header from './Containers/Header';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={SampleComponent} />
        <Route path="/cat/:id" component={CatComponent} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
