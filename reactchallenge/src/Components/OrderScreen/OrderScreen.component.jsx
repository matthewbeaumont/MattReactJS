import React, { useState } from "react";

// Images
import drugAimage from "../../Images/drugAimage.jpg";
import drugBimage from "../../Images/drugBimage.jpg";
import drugCimage from "../../Images/drugCimage.jpg";
import lightMode from "../../Images/sunny.png";
import darkMode from "../../Images/moon.png";

// Elements file
import { Container } from "./OrderScreen.elements";

// Component
export default function OrderScreen() {
  // Light/Dark mode variable
  const [lightDarkMode, setlightDarkMode] = useState(true);

  // Drug image variable
  const [drugSelected, setdrugSelected] = useState(null);

  return (
    <>
      {/* Add an order screen. On the left will be 3 radio buttons. When a button
      is clicked the picture of the drug will appear.When the add to order button
      is clicked the drug name will appear on the right in a list called Ordered
      meds. There will be a button that changes the components elements file so
      it can switch between light mode and dark mode. */}

      <Container lightDarkMode={lightDarkMode}>
        <h1>Order Screen</h1>

        {/* Light mode dark mode button */}
        <button
          onClick={() => setlightDarkMode((lightDarkMode) => !lightDarkMode)}
        >
          <img
            src={lightDarkMode ? darkMode : lightMode}
            alt="Light/Dark mode"
          />
        </button>

        <div className="orderingGrid">
          <div>
            {/* Add the radio buttons here. Type determines it is a radio button, name is the name of the group of radio buttons to show they are related, value is the value the radio button sends when clicked. */}
            {/* Add a state to the component which will become equal to the src value for theimage of the drug following an onClick event. */}
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
              style={{
                width: "200px",
                border: "solid black 2px",
                backgroundColor: "white",
                color: "black",
              }}
            />
          </div>
          {/* <div> Add the order list here.</div> */}
        </div>
      </Container>
      {/* </{lightDarkMode ? ContainerLight : ContainerDark} > */}
    </>
  );
}
