import React from "react"
import "./App.css"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Detail from "./components/Detail"
import Login from "./components/Login"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
