import React from "react";
import "./about.css";
import heroImg from "../images/inga-img2.jpg";

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
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div id="about" className="about-me-container">
        <img src={heroImg} alt="img" className="about-img" />
        <div className="text-column">
          <h3 className="about-title">{t("about")}</h3>
          <p className="about-text">{t("about_txt")}</p>
        </div>
      </div>
    </>
  );
}

export default About;
