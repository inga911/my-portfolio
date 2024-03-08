import React from "react";
import mainprojectImg from "../components/images/main-project.png";
import quote from "../components/images/quote.png";
import scroll from "../components/images/infinite_scroll.png";
import shop from "../components/images/shop-store.png";
import calculator from "../components/images/calculator.png";
import hotel from "../components/images/hotel2.png";
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

function Projects() {
  const { t } = useTranslation();
  return (
    <div id="projects" className="project">
      <h2 className="title">{t("project_container")}</h2>
      <p className="main-paragraph">{t("project_para")}</p>

      <div className="project__cards">
        <div className="card">
          <img className="img" src={mainprojectImg} alt="/" />
          <div className="card__name">Simple Todo app | PHP + Laravel</div>
          <div className="card__links">
            <a
              href="https://inga911.github.io/to-do/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/to-do/tree/main/todo"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>

        <div className="card">
          <img className="img" src={scroll} alt="/" />
          <div className="card__name">Infinite scroll | API + JS</div>
          <div className="card__links">
            <a
              href="https://inga911.github.io/infinite-scroll/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/infinite-scroll"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>

        <div className="card">
          <img className="img" src={quote} alt="/" />
          <div className="card__name">Quote generator | JS + CSS</div>
          <div className="card__links">
            <a
              href="https://inga911.github.io/quote-generator/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/quote-generator"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>

        <div className="card">
          <img className="img" src={shop} alt="/" />
          <div className="card__name">Simple shop store | PHP + Laravel</div>
          <div className="card__links">
            <a
              href="https://github.com/inga911/shop-store"
              className="link single-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>

        <div className="card">
          <img className="img" src={calculator} alt="/" />
          <div className="card__name">Calculator | JavaScript + HTML + CSS</div>
          <div className="card__links">
            <a
              href="https://inga911.github.io/calculator/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/calculator"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div>

        {/* <div className="card">
          <img className="img" src={hotel} alt="/" />
          <div className="card__name">
            Hotel booking website | PHP + Laravel
          </div>
          <div className="card__links">
            <a
              href="https://bookroom.website/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_project")}
            </a>
            <a
              href="https://github.com/inga911/hotel-booking/tree/main/hotel"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("see_code")}
            </a>
          </div>
        </div> */}
      </div>

      {/* More projects */}
    </div>
  );
}

export default Projects;
