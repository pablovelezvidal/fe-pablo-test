import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import BoxContainer from "../containers/BoxContainer";
import { BoxNumbers } from "../../Types";
import { ctxt } from "../../NumbersContext";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: "100%",
  },
}));

const MainContent = () => {
  const classes = useStyles();

  const numbersFromContext = React.useContext<BoxNumbers | null>(ctxt);

  return (
    <Container maxWidth="lg">
      <main className={classes.fullWidth}>
        <div className={classes.toolbar} />
        <div className={classes.title}>
          <Typography variant="h6">
            Drag and Drop the Numbers to the Bottom Boxes
          </Typography>
        </div>
        <div className={classes.content}>
          <BoxContainer initialNumbers={numbersFromContext}></BoxContainer>
          <BoxContainer initialNumbers={{ listNumbers: [] }}></BoxContainer>
          <BoxContainer initialNumbers={{ listNumbers: [] }}></BoxContainer>
        </div>
      </main>
    </Container>
  );
};

export default MainContent;
