import React from 'react';
import {Link } from "react-router-dom";
import Dashboard from './Dashboard';
import CountryDetail from './Dashboard';

const Nav = (props) => {
  return (
  <div>
    <nav className="navbar navbar-dark bg-primary mb-3">
      
      <Link className="navbar-brand" to="/">WikiCountries</Link>
      
    </nav>

  </div>  


  )  
}

export default Nav;