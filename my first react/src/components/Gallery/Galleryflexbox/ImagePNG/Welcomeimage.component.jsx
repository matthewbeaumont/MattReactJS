// main way that images are displayed in React.

import React from "react";

// Below the impage is imported into this file by javascript and give a name.The name of the image needs to be differnet to the name of the function (react component). The image is now a variable.
import image1 from "../../../../Images/doctor.jpg";

function Doctor() {
  return (
    <>
      <img src={image1} alt="logo picture" />
    </>
  );
}
export default Doctor;

// Alternative method that doesn't require the import image from ... at the top. Not recommended as doesn't always work.
//   <img src={require("../../Images/doctor.jpg")} />
