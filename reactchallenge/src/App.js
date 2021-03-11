// Always import react from react for all components.
import React from "react";
// Below I importa stylesheet which will give vlues of 0 for margin, border and padding allowing these to be defined in a standard way for all browsers.
import "./App.css";
// Below I import the components into my app. The app should only contain the highest level components like different pages and the header.
import {
  Header,
  Children,
  Child1,
  Child2,
  PatientSelector,
  OrderScreen,
} from "./Components/index";

export default function App() {
  return (
    <>
      <Header />
      <Children>
        <br />
        <Child1 />
        <Child2 />
      </Children>
      <PatientSelector />
      <p>Add an example of props inherited accross several components.</p>
      <p>Add an example of a ternary operator.</p>
      <p>Add an example of a component being passed down as a prop.</p>
      <OrderScreen />
    </>
  );
}
// Alternatve export method is shown below.
// export default function();
