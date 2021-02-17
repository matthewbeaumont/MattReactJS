// example of an svg image import.

import React from "react";

//
// import {​​ ReactComponent as Logo }​​ (sSVGs are imported as react components.

import { ReactComponent as Logo } from "../../logo.svg";

function ImageTwo() {
  return (
    <>
      <h1>test header</h1>
      <Logo />
    </>
  );
}
export default ImageTwo;
