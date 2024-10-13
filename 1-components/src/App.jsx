import React from "react";
// import Greet from "./components/Greet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";

function App() {
  return (
    <div>
      {/* <Greet /> */}
      <WelcomeMessage />
      <Header />
      <MainContent />
      <JSXRules />
      <Footer />
    </div>
  );
}

export default App;
