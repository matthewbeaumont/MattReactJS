import React from "react";

import Logo from "../../../../Images/DXC.png";

// import { Container } from "./DXClogo.element";

function DXClogo() {
  return (
    <>
      <img src={Logo} alt="DXC logo image" style={{ width: "300px" }}></img>
      {/* The text below will turn blue if styling works but the image above doesn't change size using a styled component.  */}
      {/* <p>blue text testing styled component.</p> */}
    </>
  );
}
export default DXClogo;
