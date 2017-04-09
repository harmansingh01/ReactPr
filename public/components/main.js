import React, { Component } from 'react';
import Nav from "./Nav";
//import * as React from "react";
export default class Main extends Component{
  render(){
      return (
        <div>
          <Nav/>
          <h2>THis is main component...</h2>
          {this.props.children}
    </div>
      );
  }
}


