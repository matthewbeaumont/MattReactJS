import styled from "styled-components/macro";

export const Container = styled.div`
  /* display: flex; */
  display: ${({ listClose }) => (listClose ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  /* Position fixed and z-index 1 are needed to allow the side menu to open on top of the other elemenst because it pots it in a layer above the default layer (layer 0). */
  flex-direction: column;
  width: 500px;
  height: 100%;
  padding: 0px 10px 10px 10px;
  color: white;
  background-color: rgb(45 45 46);
  overflow: scroll;

  .stickyheader {
    position: sticky;
    top: 0;
    background-color: cyan;
    color: black;
  }

  & button {
    padding: 10px;
    margin: 10px;
    background-color: red;
  }

  & h3 {
    padding: 10px;
    margin: 10px;
    float: left;
  }
`;
