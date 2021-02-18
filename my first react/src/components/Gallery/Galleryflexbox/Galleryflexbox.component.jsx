import React from "react";

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
      <div>
        <DXClogo />

        <Doctor />

        <Icon />

        <ImageTwo />
        <LadybirdSVG />
      </div>
    </>
  );
}
