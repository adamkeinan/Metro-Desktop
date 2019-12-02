import "./style.css";
import "./style/main.less";

import App from "./src/App";
import React from "react";
import { favicon } from "./public";

console.log(favicon.ico);
document.querySelector("App").innerHTML =
  "Hello = require your JavaScript file ...";
ReactDom.render(<App />, document.getElementById("root"));
