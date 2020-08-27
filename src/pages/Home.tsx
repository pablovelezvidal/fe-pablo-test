import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopMenu from "../components/ui/TopMenu";
import Footer from "../components/ui/Footer";
import MainContent from "../components/ui/MainContent";
import { ctxt } from "../NumbersContext";
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
  const [numbers, setNumbers] = useState<BoxNumbers>(stateNumbers);

  return (
    <ctxt.Provider value={numbers}>
      <div className={classes.root}>
        <TopMenu />
        <MainContent />
        <Footer />
      </div>
    </ctxt.Provider>
  );
};

export default Home;
