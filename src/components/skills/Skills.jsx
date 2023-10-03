import React from "react";
import "./skills.css";
import phpLogo from "../images/new-php-logo.png";
import jsLogo from "../images/js-logo.png";
import vueLogo from "../images/vue-logo.png";
import reactLogo from "../images/react-logo.png";
import cssLogo from "../images/css3-logo.png";
import bootstrapLogo from "../images/bootstrap-logo.png";
import htmlLogo from "../images/html5-logo.png";
import sassLogo from "../images/sass-icon.png";
import nodeLogo from "../images/node-logo.png";
import mysqlLogo from "../images/mysql-logo.png";
import laravelLogo from "../images/laravel-logo.png";
import phpMyAdminLogo from "../images/phpmyadmin-logo.png";

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

function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <div id="skills" className="skills-container">
        <h2 className="container-title skills-title">{t("nav_skills")}</h2>
        <div className="all-skills-logo">
          <img src={phpLogo} alt="php-logo" className="skills-logo" />
          <img
            src={laravelLogo}
            alt="laravel-logo"
            className="skills-logo laravel-logo"
          />
          <img src={jsLogo} alt="js-logo" className="skills-logo" />
          <img src={vueLogo} alt="vue-logo" className="skills-logo" />
          <img src={reactLogo} alt="react-logo" className="skills-logo" />
          <img src={cssLogo} alt="css-logo" className="skills-logo" />
          <img
            src={htmlLogo}
            alt="html-logo"
            className="skills-logo html-logo"
          />
          <img src={sassLogo} alt="sass-logo" className="skills-logo" />
          <img src={nodeLogo} alt="node-logo" className="skills-logo" />
          <img src={mysqlLogo} alt="mysql-logo" className="skills-logo" />
          <img
            src={phpMyAdminLogo}
            alt="php-my-admin-logo"
            className="skills-logo"
          />
          <img
            src={bootstrapLogo}
            alt="bootstrap-logo"
            className="skills-logo"
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
