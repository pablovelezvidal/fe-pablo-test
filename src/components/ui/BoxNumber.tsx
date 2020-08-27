import * as React from "react";
import Container from "@material-ui/core/Container";
import { BoxNumbers } from "../../Types";

const BoxNumber: React.SFC<any> = (props: { num: number }) => {
  return <Container>{props.num}</Container>;
};

export default BoxNumber;
