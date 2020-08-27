import * as React from "react";
import BoxNumber from "../ui/BoxNumber";
import styled from "styled-components";

const BoxNumberContainer = styled.div`
  display: inline-block;
  text-align: center;
  padding: 3px;
  width: 300px;
  height: 300px;
  background-color: #ddd;
  border: 1px solid red;
`;

const BoxNumbersContainer: React.SFC<any> = (props: any = []) => {
  return (
    <BoxNumberContainer>
      {props.nums.map((number: any, index: number) => (
        <BoxNumber key={index + "-" + number} num={number}></BoxNumber>
      ))}
    </BoxNumberContainer>
  );
};

export default BoxNumbersContainer;
