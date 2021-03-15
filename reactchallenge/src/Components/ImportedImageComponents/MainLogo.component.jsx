import React from "react";

import { ReactComponent as Logo } from "../../Images/insurance.svg";

import { Container } from "./MainLogo.elements";

// Key point the name of the imported SVG "Logo" above must be different to the name of the functional component below. Both must have capital letters.

export default function MainLogo() {
  return (
    <>
      <Container>
        <div>
          <Logo />
        </div>
      </Container>
    </>
  );
}
