import styled from "styled-components/macro";

export const Container = styled.div`
  color: brown;
  margin: 10px;
  border: 2px solid red;
  padding: 10px;
  & button {
    padding: 5px;
    background-color: green;
    border: solid black 2px;
  }
`;
