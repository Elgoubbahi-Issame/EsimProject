import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const container = document.getElementById("root");
const root = createRoot(container);
const options = {
  timeout: 3000,
  position: positions.TOP_RIGHT,

};
root.render(
  <BrowserRouter>
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
