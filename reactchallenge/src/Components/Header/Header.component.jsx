import React from "react";

import { Username, MainLogo } from "../index";

import { Container } from "./Header.elements";

export default function Header() {
  return (
    <>
      <Container>
        <MainLogo />

        {/* horizontal list of buttons */}
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Support</li>
        </ul>

        <Username UserID="Matthew Beaumont" UserNumber={12345} Location="WFH" />
      </Container>
    </>
  );
}
