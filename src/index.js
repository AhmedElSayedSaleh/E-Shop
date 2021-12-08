import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/Store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="/#/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
