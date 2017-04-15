import * as React from "react";

const WeatherMessage=(props)=> {
 // console.log('locatino is', props);
  let{temp,location}=props;
  return <div>
    <h3>It's {temp} in {location}</h3>
  </div>;
};

export default WeatherMessage;
