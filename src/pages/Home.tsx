import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopMenu from "../components/ui/TopMenu";
import Footer from "../components/ui/Footer";
import MainContent from "../components/ui/MainContent";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
