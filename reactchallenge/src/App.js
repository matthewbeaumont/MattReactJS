// Always import react from react for all components.
import React, { useState } from "react";
// Below I importa stylesheet which will give vlues of 0 for margin, border and padding allowing these to be defined in a standard way for all browsers.
import "./App.css";
// Below I import the components into my app. The app should only contain the highest level components like different pages and the header.
import {
  Header,
  HospitalList,
  Children,
  Child1,
  Child2,
  PatientSelector,
  OrderScreen,
} from "./Components/index";

export default function App() {
  const [hospitalList, setHospitalList] = useState(true);

  // pass the hospital list down as props to the hospital list component. teh fucntion "sethospital list" alos needs to be passed as a prop.

  return (
    <>
      {hospitalList ? null : (
        <HospitalList
          setHospitalList={setHospitalList}
          hospitallist={hospitalList}
        />
      )}

      <button
        onClick={() => setHospitalList((hosiptalList) => !hospitalList)}
        style={{
          padding: "5px",
          backgroundColor: "red",
          float: "left",
          height: "121px",
          width: "80px",
          border: "1px solid black",
        }}
      >
        <b>Hospital List</b>
      </button>
      <Header />

      <Children>
        <br />
        <Child1 />
        <Child2 />
      </Children>
      <PatientSelector />
      <p>Create some named functions and some anonymous functions.</p>
      <p>
        Add more examples of functions changing states and this changing what is
        displayed on screen.
      </p>

      <OrderScreen />
    </>
  );
}
// Alternatve export method is shown below.
// export default function();
