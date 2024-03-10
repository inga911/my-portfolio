import React from "react";
import PropTypes from "prop-types";

function EducationItem({ start, end, title, school, duration, description }) {
  return (
    <>
      <ol className="jobs">
        <li className="jobs__list">
          <p className="jobs__list--job">
            <span className="jobs__list--job-title start">{start}</span> &#8212;
            <span className="jobs__list--job-title end">{end}</span>
            <span className="jobs__list--job-title">{title}</span>
            <span className="jobs__list--job-title start">{school}</span>
            <span className="jobs__list--job-title duration">{duration}</span>
          </p>
          <p className="jobs__list--job-description">{description}</p>
        </li>
      </ol>
    </>
  );
}
EducationItem.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationItem;
