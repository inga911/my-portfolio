import React from "react";
import heroImg from "../components/images/inga-img2.jpg";

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
    react: { useSuspense: false },
  });

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div id="about" className="about">
        <h2 className="title">{t("about")}</h2>
        <div className="about__card">
          <img src={heroImg} alt="img" className="about__img" />
          <div className="about__text">
            <p className="about__text--paragraph">{t("about_txt")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
