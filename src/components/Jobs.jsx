import React from "react";
import JobsItems from "./JobsItems";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "lt", "no"],
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/my-portfolio/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: true },
  });

function Jobs() {
  const { t } = useTranslation();
  const jobItems = t("job_items", { returnObjects: true });

  return (
    <div id="jobs" className="jobs-container">
      <h2 className="title">{t("work_experience")}</h2>
      {Array.isArray(jobItems) &&
        jobItems.map((item, idx) => (
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
  );
}

export default Jobs;
