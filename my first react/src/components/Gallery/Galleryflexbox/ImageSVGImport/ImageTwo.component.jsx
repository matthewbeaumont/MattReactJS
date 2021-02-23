// example of an svg image import.

import React from "react";

// import {​​ ReactComponent as Logo }​​ (sSVGs are imported as react components.

import { ReactComponent as Logo } from "../../../../logo.svg";

function ImageTwo() {
  return (
    <>
      <Logo style={{ width: "300px" }} />
    </>
  );
}
export default ImageTwo;
