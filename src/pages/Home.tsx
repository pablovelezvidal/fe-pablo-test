import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopMenu from "../components/ui/TopMenu";
import Footer from "../components/ui/Footer";
import MainContent from "../components/ui/MainContent";
import { BoxNumbers } from "../Types";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  const stateNumbers: BoxNumbers = {
    listNumbers: [11, 10, 9, 1, 2, 3, 4, 5, 6, 7, 8],
  };
  const [numbers] = useState<BoxNumbers>(stateNumbers);

  return (
    <div className={classes.root}>
      <TopMenu />
      <MainContent nums={numbers} />
      <Footer />
    </div>
  );
};

export default Home;
