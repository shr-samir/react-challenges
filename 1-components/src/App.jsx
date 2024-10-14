import React from "react";
// import Greet from "./components/Greet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <div>
      {/* <Greet /> */}
      {/* <WelcomeMessage /> */}
      <Greeting />
      <ProductInfo />
      {/* <Header />
      <MainContent />
      <JSXRules />
      <Footer /> */}
    </div>
  );
}

export default App;
