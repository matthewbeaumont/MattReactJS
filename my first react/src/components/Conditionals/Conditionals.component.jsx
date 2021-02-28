import React from "react";

import { TernaryOperator } from "../index";

export default function Conditionals() {
  return (
    <>
      <h1>Ternary Conditionals</h1>
      <TernaryOperator
        cereal="branflakes"
        snackbar={false}
        qualification="Masters degree"
        weight={89}
        truthfulness={true}
        mentalCapacity={false}
      />
    </>
  );
}
