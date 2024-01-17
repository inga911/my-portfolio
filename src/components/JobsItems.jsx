import React from "react";
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
      <ol className="jobs">
        <li className="jobs__list">
          <p className="jobs__list--job">
            <span className="jobs__list--job-title start">{startYear}</span>{" "}
            &#8212;
            <span className="jobs__list--job-title end">{endYear}</span>
            <span className="jobs__list--job-title">{title}</span>
            <span className="jobs__list--job-title">{company}</span>
            <span className="jobs__list--job-title duration">{duration}</span>
          </p>
          <p className="jobs__list--job-description">{description}</p>
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
