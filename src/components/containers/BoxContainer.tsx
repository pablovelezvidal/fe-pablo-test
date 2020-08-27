import * as React from "react";
import { BoxNumbers } from "../../Types";
import BoxNumbersContainer from "../ui/BoxNumbersContainer";

const BoxContainer: React.SFC<any> = (props) => {
  const [numbers, setNumbers] = React.useState<BoxNumbers | null>(
    props.initialNumbers
  );

  return (
    <BoxNumbersContainer nums={numbers!.listNumbers}></BoxNumbersContainer>
  );
};

export default BoxContainer;
