import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CountryDetail from "./CountryDetail"
import countries from '../countries.json';
import Country from './Country';


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries:countries  
    }
    // deleted code below because DeleteButton is a stateless functional component
    // this.handleDeleteContact.bind(this)
  }

  render() {
    return (
      
      // <Router>
        <div className="App">
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <a class="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div class="container">
            <div class="row">
              <div class="col-5">
                <div class="list-group">

                {
                this.state.countries.map((country, index) => {
                  return <Country 
                  key={index.toString()}
                  {...country}
                  handleShowDetail={this.handleShowDetail} /> 
                  })
                }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Dashboard;

