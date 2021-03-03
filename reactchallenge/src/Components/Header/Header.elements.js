import styled from "styled-components";

export const Container = styled.div`
  /* Always follow the styled. with "div" the Container element added to the component actas as a div so it gets the properties given to styled.div */
  background-color: black;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
  & ul {
    font-size: 20px;
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    & li {
      display: flex;
      background-color: cyan;
      padding: 20px;
      margin: 5px;
      border: solid 2px red;
      min-width: 100px;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
    }
    & li:hover {
      background-color: green;
    }
  }
`;

// To export styling for more than 1 component repeat the above with another const name. Use names like container, wrapper, list, list item to make it easy to tell what is being styled.
