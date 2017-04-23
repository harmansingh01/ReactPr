import React, {Component} from 'react';

export default class WeatherForm extends Component {

  onFormSubmit(e){
   e.preventDefault();
   let location=this.refs.location.value;

   if(location.length>0){
     this.refs.location.value='';
     this.props.onSearch(location);
   }

  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <label>Enter City</label>
          <input type="text" ref="location"/>
          <button className="button expanded hollow" type="submit" >Get Weather</button>
        </form>
      </div>
    )
  }
};