import React, { Component } from 'react';

const About=()=>{
  return <div>
    <h1 className="text-center">About</h1>
    <p>THis is a weatehr application build on React. I have built this for the course</p>
    <p>Here are some of tools I used</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react" target="_blank">React</a>This is the javascript framework
        used
      </li>
      <li><a href="https://openweathermap.org" target="_blank">Open Weather Map</a>
      I used Open Weather map to fetch weather data</li>
    </ul>
  </div>;
};

export default About;
