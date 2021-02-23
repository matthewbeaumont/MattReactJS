import React from "react";

export default function PropsB({ name }) {
  console.log(name);
  return (
    <>
      <p>{name}</p>
    </>
  );
}
