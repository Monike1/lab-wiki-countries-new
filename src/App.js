import React, { Component } from 'react';
import Nav from './components/Nav';
import {Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CountryDetail from "./components/CountryDetail"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <Route path="/" component={Dashboard} />
            <Route path='/country-detail/:id' component={CountryDetail} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

