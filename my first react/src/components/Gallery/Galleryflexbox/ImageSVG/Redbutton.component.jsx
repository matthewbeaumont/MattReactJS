// I created an SVG file using Inkscape and then converted the SVG to a JSX componet using the webiste: https://svg2jsx.com/ I copied teh JSX output below. This bypasses the need to have the SVG files saved separatley to the component.

import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="612.359"
      height="612.88"
      version="1.1"
      viewBox="0 0 162.02 162.158"
    >
      <g
        stroke="#000"
        strokeWidth="1.323"
        transform="translate(-24.606 -61.796)"
      >
        <path fill="#000" d="M185.964 62.744v160.262H25.702V62.744z"></path>
        <path
          fill="#d40000"
          d="M114.149 61.988l20.27 67.05 22.742-45.214-23.012 66.158 44.975-23.21-57.504 39.996 50.03 7.658-70.033-1.442 35.974 35.602-55.81-42.33 8.177 49.946-20.269-67.05-22.743 45.215 23.013-66.159-44.976 23.211 57.504-39.996-50.029-7.658 70.032 1.442-35.974-35.602 55.81 42.33z"
          transform="matrix(1.04391 0 0 1.0489 -1.08 -3.023)"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
