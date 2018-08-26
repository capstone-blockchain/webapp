import "regenerator-runtime/runtime"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { SocketProvider } from "socket.io-react"
import io from "socket.io-client"

import Home from "./pages/Home/Home.jsx"

import configureStore from "./redux/stores"
const socket = io.connect(process.env.REST_ENDPOINT)
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider socket={socket}>
      <Home />
    </SocketProvider>
  </Provider>,
  document.getElementById("app")
)
