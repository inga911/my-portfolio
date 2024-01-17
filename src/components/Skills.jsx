import React from "react";
import phpLogo from "../components/images/new-php-logo.png";
import jsLogo from "../components/images/js-logo.png";
import vueLogo from "../components/images/vue-logo.png";
import reactLogo from "../components/images/react-logo.png";
import cssLogo from "../components/images/css3-logo.png";
import bootstrapLogo from "../components/images/bootstrap-logo.png";
import htmlLogo from "../components/images/html5-logo.png";
import sassLogo from "../components/images/sass-icon.png";
import nodeLogo from "../components/images/node-logo.png";
import mysqlLogo from "../components/images/mysql-logo.png";
import laravelLogo from "../components/images/laravel-logo.png";
import phpMyAdminLogo from "../components/images/phpmyadmin-logo.png";

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
      <div id="skills" className="skills">
        <h2 className="title">{t("nav_skills")}</h2>
        <div className="skills__logo">
          <img src={phpLogo} alt="php-logo" className="skills__logo--img" />
          <img
            src={laravelLogo}
            alt="laravel-logo"
            className="skills__logo--img"
          />
          <img src={jsLogo} alt="js-logo" className="skills__logo--img" />
          <img src={vueLogo} alt="vue-logo" className="skills__logo--img" />
          <img src={reactLogo} alt="react-logo" className="skills__logo--img" />
          <img src={cssLogo} alt="css-logo" className="skills__logo--img" />
          <img src={htmlLogo} alt="html-logo" className="skills__logo--img" />
          <img src={sassLogo} alt="sass-logo" className="skills__logo--img" />
          <img src={nodeLogo} alt="node-logo" className="skills__logo--img" />
          <img src={mysqlLogo} alt="mysql-logo" className="skills__logo--img" />
          <img
            src={phpMyAdminLogo}
            alt="php-my-admin-logo"
            className="skills__logo--img"
          />
          <img
            src={bootstrapLogo}
            alt="bootstrap-logo"
            className="skills__logo--img"
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
