import * as React from "react";
import Container from "@material-ui/core/Container";
import BoxNumber from "../ui/BoxNumber";
import { NumbersConsumer } from "../../NumbersContext";

const BoxContainer: React.SFC = () => {
  return (
    <NumbersConsumer>
      {(appContext) =>
        appContext && (
          <Container>
            Numbers:{" "}
            {appContext.listNumbers.map((number: any, index: number) => (
              <BoxNumber key={index + "-" + number} num={number}></BoxNumber>
            ))}
          </Container>
        )
      }
    </NumbersConsumer>
  );
};

export default BoxContainer;
