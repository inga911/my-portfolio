import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
  AiOutlineTool,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
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

function SideNav() {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("changed");
  };
  return (
    <>
      <div>
        {nav ? (
          <AiOutlineClose onClick={handleNav} className="hamburger-close" />
        ) : (
          <AiOutlineMenu onClick={handleNav} className="hamburger" />
        )}{" "}
        {nav ? (
          <div className="nav">
            <a onClick={handleNav} href="#hero" className="nav__link">
              <AiOutlineHome className="nav__link--icon" />
              <span>{t("nav_home")}</span>
            </a>
            <a onClick={handleNav} href="#about" className="nav__link">
              <BsPerson className="nav__link--icon" />
              <span>{t("nav_resume")}</span>
            </a>
            <a onClick={handleNav} href="#jobs" className="nav__link">
              <GrProjects className="nav__link--icon" />
              <span>{t("nav_work")}</span>
            </a>
            <a onClick={handleNav} href="#skills" className="nav__link">
              <AiOutlineTool className="nav__link--icon" />
              <span>{t("nav_skills")}</span>
            </a>
            <a onClick={handleNav} href="#projects" className="nav__link">
              <AiOutlineProject className="nav__link--icon" />
              <span>{t("nav_projects")}</span>
            </a>
            <a onClick={handleNav} href="#contact" className="nav__link">
              <AiOutlineMail className="nav__link--icon" />
              <span>{t("nav_contact")}</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="small-nav">
          <a href="#" className="small-nav__link">
            <AiOutlineHome className="small-nav__link--icon" />
          </a>
          <a href="#about" className="small-nav__link">
            <BsPerson className="small-nav__link--icon" />
          </a>
          <a href="#projects" className="small-nav__link">
            <AiOutlineProject className="small-nav__link--icon" />
          </a>
          <a href="#skills" className="small-nav__link">
            <AiOutlineTool className="small-nav__link--icon" />
          </a>
          <a href="#jobs" className="small-nav__link">
            <GrProjects className="small-nav__link--icon" />
          </a>
          <a href="#contact" className="small-nav__link">
            <AiOutlineMail className="small-nav__link--icon" />
          </a>
        </div>
      </div>
    </>
  );
}
export default SideNav;
