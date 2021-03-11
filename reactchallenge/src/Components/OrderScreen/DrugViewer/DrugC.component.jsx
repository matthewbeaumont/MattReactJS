import React from "react";

import { Container } from "./DrugViewer.elements";

import image from "../../../Images/drugCimage.jpg";

export default function DrugC() {
  return (
    <>
      <Container>
        <img src={image} alt="Drug C" />
      </Container>
    </>
  );
}
