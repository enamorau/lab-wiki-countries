import React, { Component } from "react";
import countrylist from "../countries.json";

import { Link } from "react-router-dom";

class CountryDetails extends Component {

  render() {
    console.log('mes props', this.props);
    const getCountry = (code) => {
      return countrylist.find((oneCountry) => oneCountry.cca3 === code)
    }
    
    const {params} = this.props.match;
    const foundcountry = getCountry(params.cca3);

    return (
      <div className= 'CountryDetails'>
        <h1>{foundcountry.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{foundcountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {foundcountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {foundcountry.borders.map((eachCountry, index) => {
                return (
                  <div key={eachCountry.cca3} className="list-group">
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/${eachCountry}`}
                    >
                      {getCountry(eachCountry).flag}{getCountry(eachCountry).name.common}
          
                    </Link>
                  </div>
                );
              })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
