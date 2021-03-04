import React from "react";

import { Container } from "./Children.elements";

export default function Children({ children }) {
  return (
    <>
      <Container>
        <h1>Children in React</h1>
        <p>
          This component has the "children" property. The children prop is used
          to allows components to be placed inside it at the parent component
          level.
        </p>
        <p>
          {" "}
          <b>Example not using children</b> Component A contains Component B
          which contains Components C & D.
        </p>
        <p>
          {" "}
          <b>Example using children.</b> Component A contains Component B which
          has the children prop. Component A nests Component C & D inside
          Component A and these 2 components appear where the "children" prop is
          used in Component B. This is very useful if there are parts of
          component A that need to appear before and after components C & D. It
          isn't possible to do this without using children.{" "}
        </p>
        {children}
        <p>
          Child 1 child 2 components are nested in the Children component when
          it is used in App.js.
        </p>
      </Container>
    </>
  );
}
