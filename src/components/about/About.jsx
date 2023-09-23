import React from "react";
import "./about.css";
import heroImg from "../images/inga-img2.jpg";

function About() {
  return (
    <>
      <div id="about" className="about-me-container">
        <img src={heroImg} alt="img" className="about-img" />
        <div className="text-column">
          <h3 className="about-title">Briefly about me</h3>
          <p className="about-text">
            In the fall of 2022, I realized that I wanted to change my career
            direction. After looking into the possibilities of IT, I decided to
            dive into these vast areas. After weighing all the benefits and
            risks, I started this path with Back-End | PHP courses, to which I
            devoted all my free time. <br></br>Through various work experiences,
            I have also gained various experiences, such as paying attention to
            small details, which is useful when creating websites/apps,
            communicating with clients - I am able to listen and properly
            respond to their needs, working in a team to achieve common goals
            and contributing effectively to the project. I have experience with
            Windows system, PHP, Laravel, React.js, JavaScript, HTML, CSS/SCSS,
            MySQL, VSCode, Node.js, Bootstrap. <br></br> I look forward to the
            opportunity to apply my accumulated knowledge to create professional
            websites and apps. I am determined to constantly improve my skills.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
