import React, { useState, useRef } from "react";

function CustomTooltipLink({ children, tooltipText, href }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef();

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a href={href} className="small-nav__link">
        {children}
      </a>
      {showTooltip && (
        <div
          className="custom-tooltip"
          //   style={{ top: "100%", left: 0 }}
          ref={tooltipRef}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}

export { CustomTooltipLink };
