import React, {Component} from 'react';

export default class WeatherForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Enter City</label>
          <input type="text"/>
          <input type="submit" label="Enter"/>
        </form>
      </div>
    )
  }
};