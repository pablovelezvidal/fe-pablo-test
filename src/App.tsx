import React from "react";
import TopMenu from "./components/ui/TopMenu";
import Footer from "./components/ui/Footer";
import MainContainer from "./container/MainContainer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TopMenu />
          </Grid>
          <Grid item xs={12}>
            <MainContainer />
          </Grid>
          <Footer />
        </Grid>
      </Container>
    </>
  );
}

export default App;
