import React from "react";

// This component is used twice. The name and type props are linked to other props that have been defined elsewhere so even though the component is used twice the props render different values.
export default function Pet({ type, name }) {
  return (
    <>
      <p>
        Hiya, I'm {name} and I'm a {type}.
      </p>
    </>
  );
}
