import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import Language from "./components/header/Language";
import SideNav from "./components/sidenav/SideNav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Jobs from "./components/jobs/Jobs";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <div>
        <Language />
        <SideNav />
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
