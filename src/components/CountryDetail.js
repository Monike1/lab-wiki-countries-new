import React from 'react';
import countries from "../countries.json"

function CountryDetail(props) {
    debugger

    return (
     
      <div className="col-6 offset-6">
        <table className="table">
          <thead>
            <tr colspan="2">
              <h1>{props.location.query.name.common}</h1>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{props.location.query.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{props.location.query.area} km<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>{props.location.query.borders}
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    ) 
}


export default CountryDetail;