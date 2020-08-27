import * as React from "react";
import styled from "styled-components";

const NumberContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  padding: 3px;
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #22ee22;
  border: 2px solid blue;
`;

const BoxNumber: React.SFC<any> = (props: { num: number }) => {
  return <NumberContainer>{props.num}</NumberContainer>;
};

export default BoxNumber;
