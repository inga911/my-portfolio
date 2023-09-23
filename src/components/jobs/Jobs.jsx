import React from "react";
import JobsItems from "./JobsItems";
import "./jobs.css";

const data = [
  {
    startYear: "2020 / 03",
    endYear: "2023 / 07",
    title: "Seller / driver",
    company: "Diplom-Is AS",
    duration: "3 years 4 months",
    description: `
    ‧ Assesing sales data and implicate new tactics to achieve better results
    ‧ Communication with customers
    ‧ Achieving common goals in a team
    ‧ Daily documentation filling
    ‧ Execution of planned works on the routes
    ‧ New sales techniques implementation,
    ‧ Daily health and safety checks`,
  },
  {
    startYear: "2017 / 09",
    endYear: "2018 / 06",
    title: "Dental hygienist/ Dentist assistant",
    company: "PROMEDICA Familly Clinic",
    duration: "11 months",
    description: ` 
    ‧ Assessing patients' oral health and change documentation.
    ‧ Perform dental cleanings.
    ‧ Demonstrating proper brushing and flossing techniques.
    ‧ Collaborating with the dentist to create treatment plans for patients.
    ‧ Updating treatment plans and patient records.
    ‧ Taking dental X-rays as needed for diagnosis and treatment planning.
    ‧ Sterilizing and maintaining dental instruments and equipment to ensure infection control.
    ‧ Ordering dental supplies and maintaining inventory.
    ‧ Assisting the dentist during procedures.
    ‧ Supply and stock management. 
    ‧ Facility preparation for new patients. 
    ‧ Workload planing. 
    ‧ Communication with patients.`,
  },
  {
    startYear: "2016 / 04",
    endYear: "2017 / 08",
    title: "Retail Salesperson",
    company: "APRANGA Group",
    duration: "1 year 4 month",
    description: `
    ‧ Communicate and consult with customers. 
    ‧ Demonstrate and explain products properties.
    ‧ Implement sales tactics.
    ‧ Monitor and restock merchandise on the sales floor.
    ‧ Conduct inventory count to ensure accurate stock levels.
    ‧ Resolve customer complaints or issues.
    ‧ Prepair sales reports or documentation .
    `,
  },
];
function Jobs() {
  return (
    <>
      <div id="jobs" className="jobs-container">
        <h2>Work Experience</h2>
        {data.map((item, idx) => (
          <JobsItems
            key={idx}
            startYear={item.startYear}
            endYear={item.endYear}
            title={item.title}
            company={item.company}
            duration={item.duration}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Jobs;
