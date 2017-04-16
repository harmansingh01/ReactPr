import React, { Component } from 'react';
import Nav from "./Nav";

const Main =(props)=>{
      return  <div>
          <Nav/>
          <h2>THis is main component...</h2>
          {props.children}
    </div>;
};


export default Main;