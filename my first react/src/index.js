import React from "react";
// The ReactDOM has to be imported into this index.js file because it will be needed below.
import ReactDOM from "react-dom";
// The below imported styleshset effects the whole site because it is imported into the highest level.
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// The below section is telling the ReactDOM to render inside the element which has the ID of root.
// Note that the only component that is being rendered is the App.js component "<App />".

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
