// Import React from "react" is required for all components.
import React from "react";

// Import the components used in this component.
import { FirstProps, SecondProps, PropsB } from "../";

export default function PropsContainer({ drink }) {
  console.log("PropsContainer: ", drink);
  return (
    <>
      <h1>Examples of Properties</h1>
      {/* First use of props is below using the traditional method. */}
      <FirstProps fruit="apple" veg="potato" />
      {/* The second use of probs below uses the destructuring method. At the level where the prop variables are defined (this level) there are no changes. */}
      <SecondProps sport="Badminton" dessert="icecream" />
      <p>
        Have a glass of <PropsB name={drink} />
      </p>
    </>
  );
}
