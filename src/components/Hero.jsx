import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../components/images/inga-img4.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

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

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div id="hero" className="hero">
        {/* <img src={heroImg} alt="img" className="hero__img" /> */}
        <div className="hero__greetings">
          <h1 className="hero__greetings--hero-h1">{t("my_name")}</h1>
          <TypeAnimation
            className="hero__greetings--animation"
            sequence={["The developer", 3000, "The coder", 2500]}
            wrapper="span"
            speed={4}
            deletionSpeed={1}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <div className="hero__greetings--links">
            <a href="https://www.linkedin.com/in/inga-banaityte-861556260/">
              <FaLinkedinIn className="fa-icons linkedin" />
            </a>
            <a href="https://github.com/inga911">
              <FaGithub className="fa-icons github" />
            </a>
          </div>
        </div>
        <img src={heroImg} alt="img" className="hero__img" />
      </div>
    </>
  );
}

export default App;
