import React from "react";

import { Username } from "../index";

import { Container } from "./Header.elements";

export default function Header() {
  return (
    <>
      <Container>
        {/* image logo
        horizontal list of buttons */}
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        {/* username component */}
        <Username />
      </Container>
    </>
  );
}
