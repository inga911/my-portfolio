import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
  AiOutlineTool,
} from "react-icons/ai";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { CustomTooltipLink } from "./Tooltip";

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
            <a onClick={handleNav} href="#projects" className="nav__link">
              <AiOutlineProject className="nav__link--icon" />
              <span>{t("nav_projects")}</span>
            </a>
            <a onClick={handleNav} href="#skills" className="nav__link">
              <AiOutlineTool className="nav__link--icon" />
              <span>{t("nav_skills")}</span>
            </a>
            <a onClick={handleNav} href="#education" className="nav__link">
              <LiaGraduationCapSolid className="nav__link--icon" />
              <span>{t("nav_education")}</span>
            </a>
            <a onClick={handleNav} href="#jobs" className="nav__link">
              <GrProjects className="nav__link--icon" />
              <span>{t("nav_work")}</span>
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
          {/* <a href="#" className="small-nav__link" title={t("tooltip_home")}>
            <AiOutlineHome className="small-nav__link--icon" />
          </a>
          <a
            href="#about"
            className="small-nav__link"
            title={t("tooltip_about")}
          >
            <BsPerson className="small-nav__link--icon" />
          </a>
          <a
            href="#projects"
            className="small-nav__link"
            title={t("tooltip_projects")}
          >
            <AiOutlineProject className="small-nav__link--icon" />
          </a>
          <a
            href="#skills"
            className="small-nav__link"
            title={t("tooltip_skills")}
          >
            <AiOutlineTool className="small-nav__link--icon" />
          </a>
          <a
            href="#education"
            className="small-nav__link"
            title={t("tooltip_education")}
          >
            <LiaGraduationCapSolid className="small-nav__link--icon" />
          </a>

          
          <a href="#jobs" className="small-nav__link" title={t("tooltip_jobs")}>
            <GrProjects className="small-nav__link--icon" />
          </a> */}

          <CustomTooltipLink href="#" tooltipText={t("tooltip_home")}>
            <AiOutlineHome className="small-nav__link--icon" />
          </CustomTooltipLink>

          <CustomTooltipLink href="#about" tooltipText={t("tooltip_about")}>
            <BsPerson className="small-nav__link--icon" />
          </CustomTooltipLink>

          <CustomTooltipLink
            href="#projects"
            tooltipText={t("tooltip_projects")}
          >
            <AiOutlineProject className="small-nav__link--icon" />
          </CustomTooltipLink>

          <CustomTooltipLink href="#skills" tooltipText={t("tooltip_skills")}>
            <AiOutlineTool className="small-nav__link--icon" />
          </CustomTooltipLink>

          <CustomTooltipLink
            href="#education"
            tooltipText={t("tooltip_education")}
          >
            <LiaGraduationCapSolid className="small-nav__link--icon" />
          </CustomTooltipLink>

          <CustomTooltipLink href="#jobs" tooltipText={t("tooltip_jobs")}>
            <GrProjects className="small-nav__link--icon" />
          </CustomTooltipLink>

          {/* <a
            href="#contact"
            className="small-nav__link"
          >
            <AiOutlineMail className="small-nav__link--icon" />
          </a> */}

          <CustomTooltipLink href="#contact" tooltipText={t("tooltip_contact")}>
            <AiOutlineMail className="small-nav__link--icon" />
          </CustomTooltipLink>
        </div>
      </div>
    </>
  );
}
export default SideNav;
