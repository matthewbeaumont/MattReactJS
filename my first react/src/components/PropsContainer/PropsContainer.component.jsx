// Import React from "react" is required for all components.
import React from "react";

// Import the components used in this component.
import { FirstProps, SecondProps, PropsB, DarkLord, Minion } from "../index.js";

export default function PropsContainer({ drink }) {
  console.log("PropsContainer: ", drink);
  return (
    <>
      <h1>Examples of Properties</h1>
      <p>
        Properties (known as props) are variables that can be given to a
        component. When the component is used its property can be given a value
        which could be any type of data such as a string or a number.
      </p>

      <h3>First use of props is below using the traditional method.</h3>
      <FirstProps fruit="apple" veg="potato" />

      <h3>The second use of probs below uses the destructuring method. </h3>
      <p>
        At the level where the prop variables are defined (this level) there are
        no changes.
      </p>
      <p>
        {" "}
        I like to play <SecondProps sport="Badminton" />
      </p>
      <p>
        {" "}
        I like to eat <SecondProps dessert="icecream" />
      </p>

      <h3>Props where the property variable is equal to another variable.</h3>
      <p>
        In the example below the component "Propscontainer.jsx" has a property
        called "drink". the value for drink is given in its parent component
        "App.js". Propsconatiner.jsx has a child component "PropsB" which has a
        property called "name". The value for name is given in "props container
        and is set to be equal to the property of "drink".
      </p>
      <p>
        Have a glass of <PropsB name={drink} />
      </p>

      <h3>More Props examples</h3>
      {/* establish props at PropsContainer componet and use them in child component.  */}
      <DarkLord
        forename="Lord"
        surname="Voldemort"
        occupation="Dark Wizard"
        age={60}
        // The age is a number rather than a string because it is in curly braces rather than quotation marks.
        // Establish props at PropsContainer. use the props in the child component and make the property eqaul to a property that is then used in the child of the child component.
        pettype="cat"
        petname="snowflake"
      />
      {/* Establish props at PropsContainer component and render in the child of the child component.*/}
      <Minion
        minionname="Bob"
        minionwand="willow"
        minioncloak="red"
        pettype="owl"
        petname="Hedwig"
      />
    </>
  );
}
