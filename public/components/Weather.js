import React, {Component} from 'react';
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import {getTemp} from "../api/openWeatherMap";
import ErrorModal from "./ErrorModal";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount(){
    let location=this.props.location.query.location;

    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/'
    }
  }

  componentWillReceiveProps(newProps){
    let location=newProps.location.query.location;

    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/'
    }
  }

  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location:undefined,
      temp:undefined
    });
    let that = this;
    getTemp(location).then(function (temp) {
        that.setState({
          location: location, temp: temp, isLoading: false,
          errorMessage:undefined
        });
      },
      function (e) {
        that.setState({
          isLoading: false,
          errorMessage: e.responseJSON.message
        });

      }
    )
  };

  renderMessage(isLoading, temp, location) {
    if (isLoading) {
      return <h3 className="text-center">Fetching weather...</h3>;
    }
    else if (temp && location) {
      return <WeatherMessage temp={temp} location={location}/>;
    }
  }

  renderError(){
    if(this.state.errorMessage!==undefined){
      return <ErrorModal title={'OpenWeather Error'} message={this.state.errorMessage}/>
    }
  }
  render() {
    //console.log('inside render');
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {/*<WeatherMessage temp={this.state.temp} location={this.state.location}/>*/}
        {this.renderMessage(this.state.isLoading, this.state.temp, this.state.location)}
        {this.renderError()}
      </div>
    )
  }
};