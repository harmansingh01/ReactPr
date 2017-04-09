import React from 'react';
import {Link } from 'react-router';
import About from "./About";

const Nav=()=>{
  return (
    <div>
      <h2>Nav component</h2>
      <Link to="/" >Get Weather</Link>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>

  );
};

export default Nav;