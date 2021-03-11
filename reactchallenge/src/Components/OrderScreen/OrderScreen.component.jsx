import React, { useState } from "react";

import { DrugA, DrugB, DrugC } from "../index";

import drugAimage from "../../Images/drugAimage.jpg";
import drugBimage from "../../Images/drugBimage.jpg";
import drugCimage from "../../Images/drugCimage.jpg";

import { ContainerLight } from "./OrderScreenLight.elements";

export default function OrderScreen() {
  const [drugSelected, setdrugSelected] = useState(null);
  return (
    <>
      {/* Add an order screen. On the left will be 3 radio buttons. When a button
      is clicked the picture of the drug will appear.When the add to order button
      is clicked the drug name will appear on the right in a list called Ordered
      meds. There will be a button that changes the components elements file so
      it can switch between light mode and dark mode. */}
      <ContainerLight>
        <h1>Order Screen</h1>
        {/* Light mode dark mode button */}
        <div className="orderingGrid">
          <div>
            {/* Add the radio buttons here. Type determines it is a radio button, name is the name of the group of radio buttons to show they are related, value is the value teh radio button sends when clicked. */}
            {/* Add a state to the component to enable the component to know if the drug has been selected. value changes to drug A B or C. The src for the image would be a 3 times terminator if a is selected show a, if b is selcetd show b.  */}
            <input
              type="radio"
              name="drug"
              value="Drug A"
              onClick={() => setdrugSelected((drugSelected) => drugAimage)}
            />
            <label>Drug A</label> <br />
            <input
              type="radio"
              name="drug"
              value="Drug B"
              onClick={() => setdrugSelected((drugSelected) => drugBimage)}
            />
            <label>Drug B</label> <br />
            <input
              type="radio"
              name="drug"
              value="Drug C"
              onClick={() => setdrugSelected((drugSelected) => drugCimage)}
            />
            <label>Drug C</label> <br />
          </div>
          <div>
            {/* Add the drug image viewer here. */}
            <img
              id="drugImage"
              src={drugSelected}
              alt="no drug selected"
              style={{ width: "200px", border: "solid black 2px" }}
            />
            {/* <DrugA /> */}
          </div>
          {/* <div> Add the order list here.</div> */}
        </div>
      </ContainerLight>
    </>
  );
}
