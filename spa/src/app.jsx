import "regenerator-runtime/runtime"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Home from "./pages/Home/Home.jsx"

import configureStore from "./redux/stores"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("app")
)
