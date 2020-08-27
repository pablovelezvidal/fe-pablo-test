import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopMenu from "../components/ui/TopMenu";
import Footer from "../components/ui/Footer";
import MainContent from "../components/ui/MainContent";
import { NumbersProvider } from "../NumbersContext";
import { BoxNumbers } from "../Types";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const Home = () => {
  const classes = useStyles();

  const stateNumbers: BoxNumbers = { listNumbers: [1, 2, 3, 4, 5, 6, 7, 8] };

  const [numbers, setNumbers] = useState<BoxNumbers>(stateNumbers);

  return (
    <NumbersProvider value={numbers}>
      <div className={classes.root}>
        <TopMenu />
        <MainContent />
        <Footer />
      </div>
    </NumbersProvider>
  );
};

export default Home;
