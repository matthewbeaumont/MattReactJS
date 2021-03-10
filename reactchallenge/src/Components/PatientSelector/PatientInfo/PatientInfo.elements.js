import styled from "styled-components/macro";

export const Container = styled.div`
  color: blue;
  margin: 10px;
  border: 2px solid yellow;
  padding: 10px;
  & table,
  th,
  td {
    border: 1px solid black;
    min-width: 100px;
  }
  & table td {
    color: red;
    padding: 5px;
  }
`;
