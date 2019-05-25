import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CountryDetail from "./CountryDetail"
import countries from './countries.json';
import Dashboard from './components/Dashboard';
import CountryDetail from './components/CountryDetail';


class App extends Component {
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
      <div>
        <Dashboard />
        {/* <CountryDetail /> */}
      </div>
    );
  }
}

export default App;

