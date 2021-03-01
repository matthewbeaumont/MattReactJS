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
      <p>First Paragraph.</p>
      <p>Paragraph 2.</p>
    </>
  );
}
// Alternatve export method is shown below.
// export default function();
