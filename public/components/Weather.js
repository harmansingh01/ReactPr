import React, {Component} from 'react';
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import {getTemp} from "../api/openWeatherMap";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleSearch(location) {
    this.setState({isLoading: true});
    let that = this;
    getTemp(location).then(function (temp) {
        that.setState({location: location, temp: temp, isLoading: false});
      },
      function (errorMessage) {
        that.setState({isLoading: false});
        alert(errorMessage);
      }
    )
  };

  renderMessage(isLoading, temp, location) {
    if (isLoading) {
      return <h3>Fetching weather...</h3>;
    }
    else if (temp && location) {
      return <WeatherMessage temp={temp} location={location}/>;
    }
  }

  render() {
    //console.log('inside render');
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {/*<WeatherMessage temp={this.state.temp} location={this.state.location}/>*/}
        {this.renderMessage(this.state.isLoading, this.state.temp, this.state.location)}
      </div>
    )
  }
};