import React from "react";

import { Container } from "./DrugViewer.elements";

import image from "../../../Images/drugBimage.jpg";

export default function DrugA() {
  return (
    <>
      <Container>
        <img src={image} alt="Drug B" />
      </Container>
    </>
  );
}
