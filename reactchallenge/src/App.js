// Always import react from react for all components.
import React from "react";
// Below I importa stylesheet which will give vlues of 0 for margin, border and padding allowing these to be defined in a standard way for all browsers.
import "./App.css";
// Below I import the components into my app. The app should only contain the highest level components like different pages and the header.
import { Header } from "./Components/index";

export default function App() {
  return (
    <>
      <Header />
      <p>Add an example of children.</p>
      <p>Add an example of props inherited accross several components.</p>
      <p>Add an example of a ternary operator.</p>
    </>
  );
}
// Alternatve export method is shown below.
// export default function();
