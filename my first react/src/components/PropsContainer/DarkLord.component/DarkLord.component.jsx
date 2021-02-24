import React from "react";

import { Pet } from "../../index";

import { Container } from "./DarkLord.elements";

// Properties listed below in the curley braces are accepted.
// The component cannot render properuties unless they are mentioned in the curley braces below.
export default function DarkLord({
  forename,
  surname,
  occupation,
  age,
  pettype,
  petname,
}) {
  return (
    <>
      <Container>
        <p>
          My name is{" "}
          <span>
            {forename} {surname}
          </span>
          .
        </p>
        <p>
          {" "}
          I am a <span>{occupation}</span>.
        </p>
        <p>I am {age} years old.</p>
        <p>
          I have a {pettype} called {petname}
        </p>
      </Container>
      <Pet name={petname} type={pettype} />
    </>
  );
}
