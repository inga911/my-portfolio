import React from "react";
import "./App.css";
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
