import React from "react";
import "./jobs.css";

function JobsItems({
  startYear,
  endYear,
  title,
  company,
  duration,
  description,
}) {
  return (
    <>
      <ol className="jobs-items-container">
        <li className="jobs-items-list">
          <div className="circle" />
          <p className="each-job">
            <span className="year">{startYear}</span>
            <span className="year ">{endYear}</span>
            <span className="title">{title}</span>
            <span className="company">{company}</span>
            <span className="duration">{duration}</span>
          </p>
          <p className="description">{description}</p>
        </li>
      </ol>
    </>
  );
}

export default JobsItems;
