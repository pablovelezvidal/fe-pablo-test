import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  appBar: {
    width: `calc(100%)`,
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Drag The Numbers From the Top Box and Drop Them in the Bottom Boxes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;
