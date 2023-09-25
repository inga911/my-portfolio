import React from "react";
import "./contact.css";
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
      <div id="contact" className="contact-container">
        <h2 className="contact-title">{t("contact_container")}</h2>
        <div className="form">
          <form
            action="https://getform.io/f/3a75f912-8e9c-4c0c-84c7-3382bddaaefd"
            method="post"
            encType="multipart/form-data"
          >
            <div className="name-phone">
              <div className="label">
                <label>{t("contact_name_label")}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact_name_input")}
                />
              </div>
              <div className="label">
                <label>{t("contact_phone_label")}</label>
                <input
                  type="text"
                  name="phone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder={t("contact_phone_input")}
                />
              </div>
            </div>
            <div className="sender-info">
              <div className="label">
                <label>{t("contact_email_label")}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact_email_input")}
                />
              </div>
            </div>
            <div className="sender-info">
              <div className="label">
                <label>{t("contact_subject_label")}</label>
                <input
                  type="text"
                  name="subject"
                  placeholder={t("contact_subject_input")}
                />
              </div>
            </div>
            <div className="label">
              <label>{t("contact_message_label")}</label>
              <textarea
                type="10"
                name="message"
                placeholder={t("contact_message_input")}
              ></textarea>
            </div>

            <button>
              <AiOutlineSend className="send-icon" />
              {t("send_message")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
