import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  background-color: black;
  display: flex;
  flex-direction: horizontal;
  & ul {
    font-size: 20px;
    display: flex;
    flex-direction: horizontal;
    list-style-type: none;
    & li {
      background-color: cyan;
      padding: 20px;
      margin: 5px;
      border: solid 2px red;
      min-width: 100px;
      text-align: center;
    }
  }
`;

// To export styling for more than 1 component repeat the above with another const name. Use names like container, wrapper, list, list item to make it easy to tell what is being styled.
