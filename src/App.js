import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Attend from "./components/Attend";
import { connect } from "react-redux";
import * as actions from "./actions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/attend/:num/:id" component={Attend} />
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);
