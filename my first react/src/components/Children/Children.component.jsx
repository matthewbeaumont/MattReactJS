import React from "react";
import { Child1, Child2, Child1friend } from "../index";

export default function Children() {
  return (
    <>
      <h1 style={{ backgroundColor: "blue", height: "50px" }}>
        Using the children reserved property
      </h1>
      <p>
        There are 2 components inside this component Child1 and Child2. Both of
        these components have the children reserved property which allows them
        to accept nested elements or other components.
      </p>
      {/* Example below of making a property equal to a component.  */}
      <Child1 property1={<Child1friend />}>
        <h4 style={{ backgroundColor: "blue", height: "50px" }}>
          Test1 - The children property in Child1 component is placed after the
          Child1 content
        </h4>
        <Child2>
          <h4 style={{ backgroundColor: "blue", height: "50px" }}>
            Test2 - The children property in Child2 is placed before the Child2
            content.
          </h4>
        </Child2>
      </Child1>
    </>
  );
}
