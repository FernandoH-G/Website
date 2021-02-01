import './App.css';

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from './Component/Navigation';
import About from "./Endpoint/About"
import Home from "./Endpoint/Home"

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  )
}

export default App;
