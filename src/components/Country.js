import React from 'react';
import {Route, Link } from "react-router-dom";

function Country(props) {
  // debugger
  return (
  <div>
      <Link className="list-group-item list-group-item-action" to={{
         pathname:  `/country-detail/${props.cca3}`,
         query: {
             name: props.name,
             borders: props.borders,
             capital: props.capital,
             area: props.area
          } 
      }}>
        <span role="img">{props.flag}</span> {props.name.common}
      </Link>
  </div>
    ) 
}

export default Country;