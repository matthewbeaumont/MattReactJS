import React from "react";

import { Container } from "./PatientInfo.elements";

export default function PatientSelector({
  firstName,
  surname,
  injury,
  waitTime,
  nhsOrPrivate,
}) {
  return (
    <>
      <Container>
        <p> placeholder test</p>
        <table>
          <tr>
            <th>First Name</th>
            <td>{firstName}</td>
          </tr>
          <tr>
            <th>Surname</th>
            <td>{surname}</td>
          </tr>
          <tr>
            <th>Injury</th>
            <td>{injury}</td>
          </tr>
          <tr>
            <th>Wait time</th>
            <td>{waitTime}</td>
          </tr>
          <tr>
            <th>NHS or Private </th>
            <td>{nhsOrPrivate}</td>
          </tr>
        </table>
      </Container>
    </>
  );
}
