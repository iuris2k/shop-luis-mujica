import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//</React.StrictMode>reportWebVitals();
