import * as React from "react";
import Container from "@material-ui/core/Container";
import BoxNumber from "../ui/BoxNumber";
import { NumbersConsumer } from "../../NumbersContext";
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

const BoxContainer: React.SFC = () => {
  return (
    <NumbersConsumer>
      {(appContext) =>
        appContext && (
          <BoxNumberContainer>
            {appContext.listNumbers.map((number: any, index: number) => (
              <BoxNumber key={index + "-" + number} num={number}></BoxNumber>
            ))}
          </BoxNumberContainer>
        )
      }
    </NumbersConsumer>
  );
};

export default BoxContainer;
