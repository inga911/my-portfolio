import React from "react";
import "./projects.css";
import mainprojectImg from "../images/main-project.png";
import quote from "../images/quote.png";
import scroll from "../images/scroll.png";
import bank from "../images/bank-create.png";
import shop from "../images/shop-store.png";
import calculator from "../images/calculator.png";
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
      loadPath: "/public/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

function Projects() {
  const { t } = useTranslation();
  return (
    <div id="projects" className="project-container">
      <h2>{t("project_container")}</h2>
      <p>{t("project_para")}</p>
      <div className="project-card">
        <div className="project-item">
          <img src={mainprojectImg} alt="/" />
          <div className="project-info">
            <h4>Simple ToDo App</h4>
            <p>PHP | Laravel</p>
            <a
              href="https://inga911.github.io/to-do/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/to-do/tree/main/todo"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={bank} alt="/" />
          <div className="project-info">
            <h4>First bank</h4>
            <p>PHP | Laravel</p>
            {/* <a
              href="#"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See project
            </a> */}
            <a
              href="https://github.com/inga911/php-bank"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={scroll} alt="/" />
          <div className="project-info">
            <h4>Infinite Scroll</h4>
            <p>API | JS</p>
            <a
              href="https://inga911.github.io/infinite-scroll/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/infinite-scroll"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={quote} alt="/" />
          <div className="project-info">
            <h4>Quote Generator with JS</h4>
            <p>JS</p>
            <a
              href="https://inga911.github.io/quote-generator/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/quote-generator"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={shop} alt="/" />
          <div className="project-info">
            <h4>Shop store</h4>
            <p>PHP | LAravel</p>
            {/* <a href="#" className="project-link">
              See project
            </a> */}
            <a
              href="https://github.com/inga911/shop-store"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={calculator} alt="/" />
          <div className="project-info">
            <h4>Calculator</h4>
            <p>JavaScript (+HTML, +CSS)</p>
            <a
              href="https://inga911.github.io/calculator/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/calculator"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>
        {/* More projects */}
      </div>
    </div>
  );
}

export default Projects;
