import * as React from "react";
import { NumbersConsumer } from "../../NumbersContext";
import BoxNumbersContainer from "../ui/BoxNumbersContainer";

const BoxContainer: React.SFC = () => {
  return (
    <NumbersConsumer>
      {(appContext) =>
        appContext && (
          <BoxNumbersContainer
            numbers={appContext.listNumbers}
          ></BoxNumbersContainer>
        )
      }
    </NumbersConsumer>
  );
};

export default BoxContainer;
