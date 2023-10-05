import React, { useState, useEffect } from "react";
import "./back-to-top.css";
import { AiOutlineUp } from "react-icons/ai";

function BackToTop() {
  const [showToTopButton, setShowToTopButton] = useState(false);
  useEffect(() => {
    const userScroll = () => {
      if (window.scrollY > 200) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    };
    window.addEventListener("scroll", userScroll);

    return () => {
      window.removeEventListener("scroll", userScroll);
    };
  }, []);

  return (
    <>
      <div>
        {showToTopButton && (
          <a href="#" className="to-top">
            <AiOutlineUp />
          </a>
        )}
      </div>
    </>
  );
}

export default BackToTop;
