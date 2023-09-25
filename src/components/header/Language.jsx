import React from "react";
import "./language.css";
import ReactCountryFlag from "react-country-flag";
import { AiOutlineGlobal } from "react-icons/ai";

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

function Language() {
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "lt",
      name: "Lietuvių",
      country_code: "lt",
    },
    {
      code: "no",
      name: "Norwegian",
      country_code: "no",
    },
  ];
  const { t, i18n } = useTranslation();
  const currentLanguageCode = i18n.language;

  const countryFlags = {
    gb: <ReactCountryFlag countryCode="GB" svg />,
    lt: <ReactCountryFlag countryCode="LT" svg />,
    no: <ReactCountryFlag countryCode="NO" svg />,
  };

  return (
    <>
      <div className="language-container">
        <div className="language-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <AiOutlineGlobal className="globe" /> {t("lang_choose")}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <a
                  href="#"
                  className={`dropdown-item ${
                    currentLanguageCode === code ? "disabled" : ""
                  }`}
                  onClick={() => {
                    i18n.changeLanguage(code);
                  }}
                >
                  {countryFlags[country_code]}
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Language;
