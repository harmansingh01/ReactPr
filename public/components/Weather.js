import React, {Component} from 'react';
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import {getTemp} from "../api/openWeatherMap";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Miami',
      temp: '88'
    };
  }

  handleSearch(location) {
    // this.setState({location: location, temp: 23});
     let that = this;
    getTemp(location).then(function (temp) {
        that.setState({location: location, temp: temp});
      },
      function (errorMessage) {
        alert(errorMessage);
      }
    )
  };

  render() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        <WeatherMessage temp={this.state.temp} location={this.state.location}/>
      </div>
    )
  }
};