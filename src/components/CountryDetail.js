import React from 'react';
import countries from "../countries.json";
import Country from './Country';

function CountryDetail(props) {
    let borders = <td>This country doesn't have any borders</td>
   
    if(props.location.query.borders.length > 0){
     
      borders = countries.filter(country => {
          return props.location.query.borders.includes(country.cca3);
        }).map((country, index) => {
          return (
    
            <Country 
            key={index.toString()}
            {...country} 
            showDetail={props.showDetail} />
            
          )
        })
    }


    return (
     
      <div className="col">
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
              <td>
                <ul>
                  {borders}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ) 
}


export default CountryDetail;