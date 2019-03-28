import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import "./styles.css";
import SampleComponent from "./Containers/SampleComponent";
import CatComponent from "./Containers/CatComponent";
import Header from "./Containers/Header";

const store = createStore(reducers);

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
