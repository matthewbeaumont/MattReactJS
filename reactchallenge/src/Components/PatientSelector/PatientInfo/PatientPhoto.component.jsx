import React from "react";

import { Container } from "./PatientPhoto.elements";

import Photo from "../../../Images/PatientPhoto.jpg";

export default function PatientPhoto() {
  return (
    <>
      <Container>
        <img src={Photo} alt="man in hospital bed" />
      </Container>
    </>
  );
}
