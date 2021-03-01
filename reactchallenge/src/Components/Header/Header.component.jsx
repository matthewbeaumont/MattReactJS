import React from "react";

import { Username, MainLogo } from "../index";

import { Container } from "./Header.elements";

export default function Header() {
  return (
    <>
      <Container>
        <div>
          {/* image logo. */}
          <MainLogo />
          {/* horizontal list of buttons */}
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
          {/* username component */}
          <Username />
        </div>
      </Container>
    </>
  );
}
