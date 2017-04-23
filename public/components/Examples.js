import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

const Examples = () => {
  return <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few example locations to try out</p>
    <ol>
      <li>
        <Link to='/?location=Dasuya'>Dasuya, Punjab</Link>
      </li>
      <li>
        <Link to='/?location=Shimla'>Shimla, Himachal Pradesh</Link>
      </li>
    </ol>
  </div>
};

export default Examples;