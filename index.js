import "./style.css";
import "./style/main.less";

import App from "./components/App";
import React from "react";
import ReactDom from "react-dom";
import { favicon } from "./public";

console.log(favicon.ico);
document.querySelector('#app').innerHTML = 'Hello = require your JavaScript file ...';
ReactDom.render(<App />, document.getElementById('root'));
