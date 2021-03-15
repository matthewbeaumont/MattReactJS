import React from "react";

import { ReactComponent as Building } from "../../../Images/building.svg";

import { Container } from "./HospitalEntry.elements";

export default function HospitalEntry({ rlName, aande, status, journeyTime }) {
  return (
    <>
      <Container>
        {/* <img className="icon" src="" alt="hospital icon" /> */}
        <Building className="icon" />
        <div className="central">
          <h3>{rlName}</h3>
          <p>A&E available: {aande}</p>
          <p>Status = {status}</p>
        </div>
        <p className="journeyTime">
          <span>{journeyTime} mins</span>
        </p>
      </Container>
    </>
  );
}
