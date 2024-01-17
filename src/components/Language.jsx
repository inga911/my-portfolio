import React from "react";
import ReactCountryFlag from "react-country-flag";

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
      name: "Norsk",
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
      <div className="header-language">
        <div className="header-language__dropdown">
          <button
            className="header-language__dropdown--lang-btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
          >
            <ReactCountryFlag
              className="current-lng-flag"
              countryCode={
                languages.find((lang) => lang.code === currentLanguageCode)
                  ?.country_code
              }
              svg
            />
          </button>
          <ul
            className="dropdown-menu header-language__dropdown--bg"
            aria-labelledby="dropdownMenuButton1"
          >
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
