import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

import CountryDetails from "./components/CountryDetails.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>

        <div className="container">
          <div className="row">

            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                <Link className="list-group-item list-group-item-action" to="/">
                  🇿🇼 Zimbabwe
                </Link>
                <Link className="list-group-item list-group-item-action" to="/">
                  🇿🇼 Zimbabwe
                </Link>
                <Link className="list-group-item list-group-item-action" to="/">
                  🇿🇼 Zimbabwe
                </Link>
                <Link className="list-group-item list-group-item-action" to="/">
                  🇿🇼 Zimbabwe
                </Link>
              </div>
            </div>

            <div class="col-7">
              <CountryDetails/>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    );
  }
}

export default App;
