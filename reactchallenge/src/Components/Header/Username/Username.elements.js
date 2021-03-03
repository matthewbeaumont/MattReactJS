import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: horizontal;
  align-items: center;

  & img {
    width: 100px;
    /* float: right; */
    border-radius: 50%;
    padding: 5px;
  }
  & button {
    width: 100px;
    height: 50px;
    background-color: red;
    opacity: 0.7;
    transition: 0.4s;
    font-size: 20px;
    color: white;
    margin-right: 20px;
  }
  & button:hover {
    opacity: 1;
  }
  & p {
    background-color: white;
    font-size: 20px;
    /* float: left; */
    padding: 5px;
    margin-right: 20px;
  }
`;
