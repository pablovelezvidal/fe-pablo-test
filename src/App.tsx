import React from "react";
import "./App.css";
import TopMenu from "./components/ui/TopMenu";
import Footer from "./components/ui/Footer";
import MainContainer from "./container/MainContainer";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
