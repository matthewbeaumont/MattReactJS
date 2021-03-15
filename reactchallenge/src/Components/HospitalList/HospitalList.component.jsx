// Sort out the hospital entries so they appear correctly.
// Find a way to get rid of the slideout. can there be a button in the component that closes itself. How do I see how this was done in the OneED site?
// Sort out the builsing SVG.

import React from "react";

import { HospitalEntry } from "../index";

import { Container } from "./HospitalList.elements";

export default function HospitalList({ hospitalList, setHospitalList }) {
  return (
    // A header with a close button and a title
    // A series of components for Hospitals with: an icon, hospital name, Opening time, capacity, Accepts major trauma
    <>
      <Container>
        <div className="stickyheader">
          <button
            onClick={() => setHospitalList((hospitalList) => !hospitalList)}
          >
            Click to close
          </button>
          <h3 className="hospitallistheading">Hospital List</h3>
        </div>
        <HospitalEntry
          rlName="Manchester Royal"
          aande="Yes"
          status="Red"
          journeyTime={10}
        />
        <HospitalEntry
          rlName="Leeds General"
          aande="No"
          status="Amber"
          journeyTime="25"
        />
        <HospitalEntry
          rlName="York Royal"
          aande="Yes"
          status="Blue"
          journeyTime="90"
        />
        <HospitalEntry
          rlName="Huddersfield Hope"
          aande="No"
          status="Amber"
          journeyTime="45"
        />
        <HospitalEntry
          rlName="Birmingham Ceneral"
          aande="No"
          status="Amber"
          journeyTime="10"
        />
        <HospitalEntry
          rlName="King Charles General"
          aande="No"
          status="red"
          journeyTime="60"
        />
        <HospitalEntry
          rlName="Aberdeen Infirmary"
          aande="Yes"
          status="Blue"
          journeyTime="400"
        />
      </Container>
    </>
  );
}
