import styled from "styled-components/macro";

// This ecomponet is used in an example of passing down a component as a property value.

export const Container = styled.div`
  & img {
    width: 150px;
  }
`;
