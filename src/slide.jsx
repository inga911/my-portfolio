import React, { useEffect } from "react";

function Slide() {
  useEffect(() => {
    const copy = document.querySelector(".skills__logo").cloneNode(true);
    document.querySelector(".skills").appendChild(copy);
  }, []);

  return <div className="slide"></div>;
}

export default Slide;
