import React, { useState, useEffect } from "react";
import "./hero.css";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../images/inga-img4.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function App() {
  // const [greeting, setGreeting] = useState("Hello");

  // useEffect(() => {
  //   const currentHour = new Date().getHours();
  //   if (currentHour >= 5 && currentHour < 12) {
  //     setGreeting("Good morning");
  //   } else if (currentHour >= 12 && currentHour < 18) {
  //     setGreeting("Good afternoon");
  //   } else {
  //     setGreeting("Good evening");
  //   }
  // }, []);

  return (
    <>
      <div id="hero" className="hero-container">
        <img src={heroImg} alt="img" className="hero-img" />
        <div className="greetings">
          <h1 className="first-sentence">I am Inga Banaityte</h1>
          <TypeAnimation
            className="animation"
            sequence={["The developer", 3000, "The coder", 2500]}
            wrapper="span"
            speed={4}
            deletionSpeed={1}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/inga-banaityte-861556260/">
              <FaLinkedinIn className="fa-icons linkedin" />
            </a>
            <a href="https://github.com/inga911">
              <FaGithub className="fa-icons github" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
