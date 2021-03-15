import styled from "styled-components/macro";

export const Container = styled.div`
  border-bottom: solid 1px gray;
  padding: 10px;
  min-height: 120px;
  display: grid;
  grid-template-areas:
    "icon rlName journeytime"
    "icon aande journeytime"
    "icon status journeytime";

  & .icon {
    grid-area: icon;
    /* width: 50px; */
  }
  & .rlName {
    grid-area: rlName;
  }
  & .aande {
    grid-area: aande;
  }
  & .status {
    grid-area: status;
  }
  & .journeytime {
    grid-area: journeytime;
  }
`;
