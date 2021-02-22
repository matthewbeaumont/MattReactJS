import React from "react";

// Example of importing a stylesheet. Note that there is also an index.css stylesheet that effects the whole site.
import "../../../../ExampleStylesheet.css";

export default function Header2() {
  return (
    <>
      <h2 className="headingstyle">Header2</h2>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
    </>
  );
}
