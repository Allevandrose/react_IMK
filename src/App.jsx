import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css/General.css";

// Components
import Test from "./components/Test";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  // Smooth scrolling effect on mount
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId !== "#") {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 90, // adjust for fixed headers if needed
              behavior: "smooth",
            });
          }
        }
      });
    });

    // Cleanup on unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <Test />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
