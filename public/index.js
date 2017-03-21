import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {Greeter} from "./components/Greeter";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
        <Greeter />
    , document.querySelector('.container'));
