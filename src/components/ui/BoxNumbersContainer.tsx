import * as React from "react";
import BoxNumber from "../ui/BoxNumber";
import styled from "styled-components";

const BoxNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  text-align: center;
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
