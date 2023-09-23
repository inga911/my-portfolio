import React from "react";
import "./projects.css";
import mainprojectImg from "../images/main-project.png";
import quote from "../images/quote.png";
import scroll from "../images/scroll.png";
import bank from "../images/bank-create.png";
import shop from "../images/shop-store.png";
import calculator from "../images/calculator.png";

function Projects() {
  return (
    <div id="projects" className="project-container">
      <h2>Projects</h2>
      <p>Here you can see some of the projects I have created for learning.</p>
      <div className="project-card">
        <div className="project-item">
          <img src={mainprojectImg} alt="/" />
          <div className="project-info">
            <h4>Simple ToDo App</h4>
            <p>PHP | Laravel</p>
            <a
              href="https://inga911.github.io/to-do/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See project
            </a>
            <a
              href="https://github.com/inga911/to-do/tree/main/todo"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See code
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={bank} alt="/" />
          <div className="project-info">
            <h4>First bank</h4>
            <p>PHP | Laravel</p>
            {/* <a
              href="#"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See project
            </a> */}
            <a
              href="https://github.com/inga911/php-bank"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See code
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={scroll} alt="/" />
          <div className="project-info">
            <h4>Infinite Scroll</h4>
            <p>API | JS</p>
            <a
              href="https://inga911.github.io/infinite-scroll/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See project
            </a>
            <a
              href="https://github.com/inga911/infinite-scroll"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See code
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={quote} alt="/" />
          <div className="project-info">
            <h4>Quote Generator with JS</h4>
            <p>JS</p>
            <a
              href="https://inga911.github.io/quote-generator/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See project
            </a>
            <a
              href="https://github.com/inga911/quote-generator"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See code
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={shop} alt="/" />
          <div className="project-info">
            <h4>Shop store</h4>
            <p>PHP | LAravel</p>
            {/* <a href="#" className="project-link">
              See project
            </a> */}
            <a
              href="https://github.com/inga911/shop-store"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See code
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={calculator} alt="/" />
          <div className="project-info">
            <h4>Calculator</h4>
            <p>JavaScript (+HTML, +CSS)</p>
            <a
              href="https://inga911.github.io/calculator/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See project
            </a>
            <a
              href="https://github.com/inga911/calculator"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See code
            </a>
          </div>
        </div>
        {/* More projects */}
      </div>
    </div>
  );
}

export default Projects;
