import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import BoxContainer from "./BoxContainer";

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

function MainContent() {
  const classes = useStyles();

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
          <BoxContainer></BoxContainer>
        </div>
      </main>
    </Container>
  );
}

export default MainContent;
