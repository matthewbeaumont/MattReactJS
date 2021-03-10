import React, { useState } from "react";

import { Container } from "./PatientSelector.elements";

import { PatientInfo } from "../index";

export default function PatientSelector() {
  // State used to control the opening of the Pateint info table.
  const [patientInfoStatus, setpatientInfoStatus] = useState(false);
  return (
    <>
      <Container>
        <p>Select a patient from the list below</p>

        <button
          onClick={() =>
            setpatientInfoStatus((logpatientInfoStatus) => !patientInfoStatus)
          }
        >
          Click to open an ePR
        </button>
        <br />
        {patientInfoStatus ? <PatientInfo /> : <p>No ePR Selected</p>}

        {/* Tips: add some on click events. Create a function that will Add a conditional, --- onClick={​​() => setPatientSelected("patient1")}​​   Add a State so that the component appears if a radio button is selected. --- {​​patientSelected === null ? null : <PatientInfo />}​​ ------ */}
        {/* <form>
          <input
            type="radio"
            id="Patient1"
            name="Patient Selector"
            value="patient1"
            onClick= ""



          ></input>
          <label for="Patient1">Patient 1</label>
          <br />
          <input
            type="radio"
            id="Patient2"
            name="Patient Selector"
            value="patient2"
          ></input>
          <label for="Patient2">Patient 2</label>
          <br />
          <input
            type="radio"
            id="Patient3"
            name="Patient Selector"
            value="patient3"
          ></input>
          <label for="Patient3">Patient 3</label>
          <br />

        
          <PatientInfo />
        </form> */}
      </Container>
    </>
  );
}
