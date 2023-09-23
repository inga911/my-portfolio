import React from "react";
import "./contact.css";
import { AiOutlineSend } from "react-icons/ai";

function Contact() {
  return (
    <>
      <div id="contact" className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <div className="form">
          <form
            action="https://getform.io/f/3a75f912-8e9c-4c0c-84c7-3382bddaaefd"
            method="post"
            encType="multipart/form-data"
          >
            <div className="name-phone">
              <div className="label">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" />
              </div>
              <div className="label">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="sender-info">
              <div className="label">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail"
                />
              </div>
            </div>
            <div className="sender-info">
              <div className="label">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Type subject here"
                />
              </div>
            </div>
            <div className="label">
              <label>Message</label>
              <textarea
                type="10"
                name="message"
                placeholder="Type your message here"
              ></textarea>
            </div>

            <button>
              <AiOutlineSend className="send-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
