import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../src/components/sass/main.scss";

import Language from "./components/Language";
import SideNav from "./components/SideNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <>
      <Language />
      <SideNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Jobs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
