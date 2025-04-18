import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css/General.css";
("");
// import Greet from './components/Greet'
import Test from "./components/test";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <body>
      <Test />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </body>
  );
}

export default App;
