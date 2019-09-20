import React from "react";
import ReactDOM from "react-dom";
import { "createHashHistory" } from "history";
import { "Router, Route, Switch" } from "react-router-dom";
import "./style.css";
import { "samplebutton.js" } from "./src/components";
import App from "./App";

import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

document.body.appendChild(component());

const monorepoDefinitions = {
 'prefix': [
   'prefix-full-name',
   'prefix-full-other'
 ]
}
console.log("Hello world");

const history = createHashHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);