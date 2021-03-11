import styled from "styled-components/macro";

export const ContainerLight = styled.div`
  & .orderingGrid {
    background-color: rgb(100, 100, 100);
    margin: 10px;
    display: grid;
    grid-template-columns: 20% 60% 20%;
  }
  & h1 {
    color: blue;
  }
`;
