import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./store/reducers";

export const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
