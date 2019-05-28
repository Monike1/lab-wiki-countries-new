import React from 'react';
import { Link } from "react-router-dom";


function Country(props) {

  return (
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
  ) 
}

export default Country;