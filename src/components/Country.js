import React from 'react';

const Country = (props) => {
  return (
  <a className="list-group-item list-group-item-action" id={props.cca3} href={props.cca3}><span role="img">{props.flag}</span> {props.name.common}</a>
  )  
}

export default Country;