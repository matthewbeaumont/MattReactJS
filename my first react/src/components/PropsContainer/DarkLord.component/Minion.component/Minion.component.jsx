import React from "react";

import { Pet } from "../../../index";

export default function Minion({
  minionname,
  minionwand,
  minioncloak,
  pettype,
  petname,
}) {
  return (
    <>
      <p>
        {" "}
        My name is {minionname}. I have a {minionwand} wand. I wear my{" "}
        {minioncloak} cloak to keep warm. I have a {pettype} called {petname}.
      </p>
      <Pet name={petname} type={pettype} />
    </>
  );
}
