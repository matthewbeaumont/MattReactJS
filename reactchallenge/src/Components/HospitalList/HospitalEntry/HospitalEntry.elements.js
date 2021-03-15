import styled from "styled-components/macro";

export const Container = styled.div`
  border-bottom: solid 1px gray;
  padding: 10px;
  margin: 0px 10px 0px 10px;
  min-height: 120px;
  display: grid;
  grid-template-areas: "icon central journeytime";

  grid-template-columns: 100px auto 100px;
  align-items: center;

  :hover {
    background-color: brown;
  }

  & .icon {
    grid-area: icon;
    width: 50px;
    padding: 5px;
    background-color: cyan;
  }

  /* Note that the below h3 and p elements get the same styling because they are separated by a comma, without the comma this styling would only apply to the p element nested within the h3 element.  */
  & .central {
    grid-area: central;
    & h3,
    p {
      padding: 5px 0px 5px 0px;
    }
  }
  & .journeyTime {
    grid-area: journeytime;
    & span {
      padding: 5px;
      color: red;
      border: solid red 1px;
    }
  }
`;
