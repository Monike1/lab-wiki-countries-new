import React from 'react';

const CountryDetail = (props) => {
  return (
  <table>
    <thead>
      <tr>
        <th colspan="2">{props.name.common}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Capital</td>
        <td>{props.capital[0]}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{props.area} km<sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>{props.borders}</td>
      </tr>
    </tbody>
  </table>
  )  
}

export default CountryDetail;