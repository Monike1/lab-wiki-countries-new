import React, { Component } from 'react';
import countries from '../countries.json';
import Country from './Country';


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries:countries,
      detailed:[]
    }

  this.showDetail = this.showDetail.bind(this);
  }



  showDetail(indexN) {
    var newCountries = [...this.state.countries];
    var detailedView = [...this.state.detailed];
    detailedView = detailedView.push(newCountries[indexN]);
    console.log(detailedView);
    this.setState({detailed: detailedView});
  }

  render() {
    return (
      
      <div className="col-5">
        <div className="list-group">
          {
          this.state.countries.map((country, index) => {
            return <Country 
            key={index.toString()}
            {...country} 
            showDetail={this.showDetail} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;