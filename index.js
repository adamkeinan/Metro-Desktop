import React from 'react';	
import ReactDOM from 'react-dom';	
import './style.css';
import { map } from 'lodash';
import { favicon.ico } from './public';

console.log(favicon.ico);

document.querySelector('#app').innerHTML = 'Hello from your JavaScript file ...';

console.log(process.env.NODE_ENV); 