import React from "react";

// Styled Components importin the elements file.
import { Container } from "./Galleryflexbox elements";

// import the image components
import DXClogo from "./ImageJPG/DXClogo.component";
import Doctor from "./ImagePNG/Welcomeimage.component";
import Icon from "./ImageSVG/Redbutton.component";
import ImageTwo from "./ImageSVGImport/ImageTwo.component";
import LadybirdSVG from "./ImageSVGImport/Ladybird.component";

export default function Galleryflexbox() {
  return (
    <>
      <h1>Gallery</h1>
      <Container>
        <div>
          <span>Example of a .png image</span>
          <DXClogo />

          <span>Example of a .jpg image</span>
          <Doctor />

          <span>Example of an SVG image within a component</span>
          <Icon />

          <span> examples of SVGs imported into a component. </span>
          <ImageTwo />
          <LadybirdSVG />
        </div>
      </Container>
    </>
  );
}
