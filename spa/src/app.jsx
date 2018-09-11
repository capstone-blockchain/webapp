import "regenerator-runtime/runtime"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { SocketProvider } from "socket.io-react"
import io from "socket.io-client"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Header from "./Header.jsx"

import configureStore from "./redux/stores"
const socket = io.connect(process.env.REST_ENDPOINT)
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider socket={socket}>
      <BrowserRouter basename="/" forceRefresh={false}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </SocketProvider>
  </Provider>,
  document.getElementById("app")
)
