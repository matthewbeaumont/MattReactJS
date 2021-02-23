import React from "react";

export default function FirstProps(props) {
  return (
    <>
      <span>{props.fruit}</span>
      <span>{props.veg}</span>
      <span>{props.sport}</span>
    </>
  );
}
