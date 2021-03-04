import React from "react";

export default function Child1() {
  return (
    <>
      <p style={{ backgroundColor: "red", height: "50px" }}>Child1 sentence</p>
      <div>{property1}</div>
      {/* children is a key word property. If children is used then it allows a component to have nested components inside of it */}
      {children}
    </>
  );
}
