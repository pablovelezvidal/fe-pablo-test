import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    width: `calc(100%)`,
  },
  footer: {
    fontSize: 17,
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Typography variant="h6" className={classes.footer}>
        Pablo Vélez - © Copyright 2020
      </Typography>
    </AppBar>
  );
};

export default Footer;
