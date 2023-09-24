import React, { useState } from "react";
import "./sideNav.css";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
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
      loadPath: "/dist/assets/locales/{{lng}}/translation.json",
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
            <a onClick={handleNav} href="#hero" className="nav-link">
              <AiOutlineHome className="nav-icon" />
              <span>{t("nav_home")}</span>
            </a>
            <a onClick={handleNav} href="#about" className="nav-link">
              <BsPerson className="nav-icon" />
              <span>{t("nav_resume")}</span>
            </a>
            <a onClick={handleNav} href="#jobs" className="nav-link">
              <GrProjects className="nav-icon" />
              <span>{t("nav_work")}</span>
            </a>
            <a onClick={handleNav} href="#projects" className="nav-link">
              <AiOutlineProject className="nav-icon" />
              <span>{t("nav_projects")}</span>
            </a>
            <a onClick={handleNav} href="#contact" className="nav-link">
              <AiOutlineMail className="nav-icon" />
              <span>{t("nav_contact")}</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="small-nav">
          <div>
            <a href="#" className="small-nav-link">
              <AiOutlineHome className="nav-icon" />
            </a>
            <a href="#about" className="small-nav-link">
              <BsPerson className="nav-icon" />
            </a>
            <a href="#jobs" className="small-nav-link">
              <GrProjects className="nav-icon" />
            </a>
            <a href="#projects" className="small-nav-link">
              <AiOutlineProject className="nav-icon" />
            </a>
            <a href="#contact" className="small-nav-link">
              <AiOutlineMail className="nav-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideNav;
