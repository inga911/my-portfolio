import React, { useState } from "react";
import "./sideNav.css";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

function SideNav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("changed");
  };
  return (
    <>
      <div>
        {nav ? (
          <AiOutlineClose onClick={handleNav} className="hamburger-close" />
        ) : (
          <AiOutlineMenu onClick={handleNav} className="hamburger" />
        )}{" "}
        {nav ? (
          <div className="nav">
            <a onClick={handleNav} href="#hero" className="nav-link">
              <AiOutlineHome className="nav-icon" />
              <span>Home</span>
            </a>
            <a onClick={handleNav} href="#about" className="nav-link">
              <BsPerson className="nav-icon" />
              <span>Resume</span>
            </a>
            <a onClick={handleNav} href="#jobs" className="nav-link">
              <GrProjects className="nav-icon" />
              <span>Work</span>
            </a>
            <a onClick={handleNav} href="#projects" className="nav-link">
              <AiOutlineProject className="nav-icon" />
              <span>Projects</span>
            </a>
            <a onClick={handleNav} href="#contact" className="nav-link">
              <AiOutlineMail className="nav-icon" />
              <span>Contact</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="small-nav">
          <div>
            <a href="#" className="small-nav-link">
              <AiOutlineHome className="nav-icon" />
            </a>
            <a href="#about" className="small-nav-link">
              <BsPerson className="nav-icon" />
            </a>
            <a href="#jobs" className="small-nav-link">
              <GrProjects className="nav-icon" />
            </a>
            <a href="#projects" className="small-nav-link">
              <AiOutlineProject className="nav-icon" />
            </a>
            <a href="#contact" className="small-nav-link">
              <AiOutlineMail className="nav-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideNav;
