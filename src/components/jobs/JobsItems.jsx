import React from "react";
import "./jobs.css";
import PropTypes from "prop-types";

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
            <span className="year">{startYear}</span> &#8212;
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
JobsItems.propTypes = {
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JobsItems;
