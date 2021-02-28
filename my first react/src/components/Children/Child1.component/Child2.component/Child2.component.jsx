import React from "react";

export default function Child2({ children }) {
  return (
    <>
      {children}
      <p style={{ backgroundColor: "green", height: "50px" }}>
        Child 2 Sentence
      </p>
    </>
  );
}
