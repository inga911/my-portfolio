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
    description: `▪️ Communication with customers 
     ▪️ Achieving common goals in a team 
     ▪️ Daily document filling 
     ▪️ Driving and sales - cashier work `,
  },
  {
    startYear: "2017 / 09",
    endYear: "2018 / 06",
    title: "Dental assistant",
    company: "PROMEDICA Familly Clinic",
    duration: "11 months",
    description: ` ▪️ Cleaned and sanitized dental tools, equipment and  treatment rooms, and restocked supplies to prep for next patient and maintain health and safety practices  
     ▪️ Scheduled appointments for new and existing customers, factoring in provider availability and scheduling loads 
     ▪️ Communication with patients`,
  },
  {
    startYear: "2016 / 04",
    endYear: "2017 / 08",
    title: "Retail Salesperson",
    company: "APRANGA Group",
    duration: "1 year 4 month",
    description: ` ▪️ Greet and communicate with customers. 
     ▪️ Consult with customers to understand their needs and preferences regarding merchandise.
     ▪️ Demonstrate and explain products, selecting and offering options that meet the customer's needs.
     ▪️ Answer customer questions about products.
     ▪️ Help customers make purchasing decisions.
     ▪️ Pick up goods from the sales warehouse; provides special orders.
     ▪️ Collect payment using the store's point-of-sale system.
     ▪️ Process returns and exchanges.
     ▪️ Perform other assigned duties.
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
