import React from "react";

// import { ReactComponent as Building } from "../../../Images/building.svg";

import { Container } from "./HospitalEntry.elements";

export default function HospitalEntry({ rlName, aande, status, journeyTime }) {
  return (
    <>
      <Container>
        <img className="icon" src="" alt="hospital icon" />
        <h3 className="rlName">{rlName}</h3>
        <p className="aande">{aande}</p>
        <p className="status">{status}</p>
        <p className="journeyTime">{journeyTime} mins</p>
      </Container>
    </>
  );
}
