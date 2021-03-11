import React from "react";

import { Container } from "./DrugViewer.elements";

import image from "../../../Images/drugAimage.jpg";

export default function DrugA() {
  return (
    <>
      <Container>
        <img src={image} alt="Drug A" />
      </Container>
    </>
  );
}
