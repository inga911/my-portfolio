import React from "react";
import { AiOutlineSend } from "react-icons/ai";
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

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div id="contact" className="contact">
        <h2 className="title">{t("contact_container")}</h2>
        <div className="contact__form">
          <form
            action="https://getform.io/f/3a75f912-8e9c-4c0c-84c7-3382bddaaefd"
            method="post"
            encType="multipart/form-data"
            className="form"
          >
            <div className="form__group">
              <input
                type="text"
                name="name"
                placeholder={t("contact_name_input")}
                className="form__input"
                required
              />
              <label className="form__label">{t("contact_name_label")}</label>
            </div>

            <div className="form__group">
              <input
                type="email"
                name="email"
                placeholder={t("contact_email_input")}
                className="form__input"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              />
              <label className="form__label">{t("contact_email_label")}</label>
            </div>

            <div className="form__group">
              <input
                type="text"
                name="subject"
                placeholder={t("contact_subject_input")}
                className="form__input"
                required
              />
              <label className="form__label">
                {t("contact_subject_label")}
              </label>
            </div>

            <div className="form__group">
              <textarea
                type="10"
                name="message"
                placeholder={t("contact_message_input")}
                className="form__input"
                required
              ></textarea>
              <label className="form__label">
                {t("contact_message_label")}
              </label>
            </div>

            <div className="contact-button">
              <button className="btn">
                <AiOutlineSend className="send-icon" />
                {t("send_message")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
