import styled from "styled-components/macro";

// This elements file has an example of using a prop "lightDarkMode" It also uses a ternary operator to determine the value for the CSS. This is done using ${}

export const Container = styled.div`
  background-color: ${({ lightDarkMode }) =>
    lightDarkMode ? "white" : "black"};
  color: ${({ lightDarkMode }) => (lightDarkMode ? "black" : "white")};
  margin: 10px;
  border: pink solid 2px;
  padding: 5px;
  & .orderingGrid {
    display: grid;
    grid-template-columns: 20% 60% 20%;
  }
  & h1 {
    color: blue;
  }
  /* The below CSS removes the default button border at the bottom of the button. */
  & button {
    padding: 0;
    border: none;
    background: none;
  }
  & button img {
    width: 30px;

    border: ${({ lightDarkMode }) =>
      lightDarkMode ? "white solid 2px" : "black solid 2px"};
  }
  & button img:hover {
    border: ${({ lightDarkMode }) =>
      lightDarkMode ? "black solid 2px" : "white solid 2px"};
  }
`;
