import React from "react";

export default function TernaryOperator({
  qualification,
  weight,
  truthfulness,
  height,
  mentalCapacity,
  cereal,
  snackbar,
}) {
  return (
    <>
      <h3>Ternary Conditionals</h3>
      <p> What qualifications does this person have?</p>
      {/* Expect that the below line will render as the value for qualifications defined in Conditionals.component.jsx. 
      If there wasn't a value for qualification or if it was not available then  */}
      <p>{qualification ? qualification : "No qualifications"}</p>

      <p>
        Below are 4 examples of using ternary conditionals. See comments for
        details.
      </p>
      {/* Using "?" and ":". if the property to the left of the ? is present and not set to false then diplay the property or component to the right of the question mark. If the property to the left of the question mark is not available or set to false then display the property or component to the right of the colon.*/}
      <p>{cereal ? "Got cerial" : "didn't get cereal"}</p>
      <p>{snackbar ? "Got snackbar" : "didn't get snackbar"}</p>

      {/* The && is saying if weight is present or its value is True the display "Test1". In this case the prpoerty is present. */}
      <p>{weight && "TEST 1"}</p>
      {/* The && is saying if truthfulness is present or its value is True the display "Test2". In this case the Value is set to true ( a boolean)  */}
      <p>{truthfulness && "TEST 2"}</p>
      {/* The ! in front of the property height is saying if the property is set to false or is not passed down then display "Test3". In this case the height property is not passwed down. */}
      <p>{!height && "TEST 3"}</p>
      {/* The ! in front of the property mentalCapacity is saying if the property is set to false or is not passed down then display "Test3". In this case the mentalCapacity property is set to false. */}
      <p>{!mentalCapacity && "TEST 4"}</p>
    </>
  );
}
