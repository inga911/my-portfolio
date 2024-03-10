import React from "react";
import EducationItems from "./EducationItem";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import EducationItem from "./EducationItem";

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

function Education() {
  const { t } = useTranslation();
  const educationItems = t("education_items", { returnObjects: true });

  return (
    <div id="education" className="jobs-container">
      <h2 className="title">{t("education")}</h2>
      {Array.isArray(educationItems) &&
        educationItems.map((item, idx) => (
          <EducationItem
            key={idx}
            start={item.start}
            end={item.end}
            title={item.title}
            school={item.school}
            duration={item.duration}
            description={item.description}
          />
        ))}
    </div>
  );
}

export default Education;
