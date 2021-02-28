import React from "react";

// Styled Components importin the elements file.
import { Container } from "./Galleryflexbox elements";

// import the image components from the index.js file.
import { Logo, Doctor, Icon, ImageTwo, LadybirdSVG } from "../../index";

// Old style of importing components.
// import Logo from "./ImageJPG/DXClogo.component";
// import Doctor from "./ImagePNG/Welcomeimage.component";
// import Icon from "./ImageSVG/Redbutton.component";
// import ImageTwo from "./ImageSVGImport/ImageTwo.component";
// import LadybirdSVG from "./ImageSVGImport/Ladybird.component";

export default function Galleryflexbox() {
  return (
    <>
      <h1>Gallery</h1>
      <Container>
        <div>
          <p className="redpara">Example of a .png image</p>
          <Logo />

          <p className="redpara">Example of a .jpg image</p>
          <Doctor />

          <p className="redpara">Example of an SVG image within a component</p>
          <Icon />

          <p className="redpara">Examples of SVGs imported into a component.</p>
          <ImageTwo />
          <LadybirdSVG />
        </div>
      </Container>
    </>
  );
}
