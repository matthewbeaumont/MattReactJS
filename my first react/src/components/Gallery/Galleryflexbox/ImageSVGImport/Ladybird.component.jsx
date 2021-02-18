import React from "react";

import { ReactComponent as Ladybird } from "../../../../Images/ladybug.svg";

// Key point the name of the imported SVG "Ladybird" above must be different to the name of the functional component below. Both must have capital letters.

function LadybirdSVG() {
  return (
    <>
      <Ladybird />
    </>
  );
}
export default LadybirdSVG;
