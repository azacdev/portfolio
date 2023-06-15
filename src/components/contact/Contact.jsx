import { useRef, useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6b4dv29",
      "template_l30c3gd",
      form.current,
      "cJuH2_nxQgwnvDytr"
    );
    e.target.reset();
  };

  return (
    <section
      className={`${
        theme ? "text-color-light" : "text-color-dark"
      } contact section`}
      id="contact"
    >
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div
              className={`${
                theme ? "button-light" : "button-dark"
              } contact__card`}
            >
              <MdEmail className="contact__card-icon" />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">azacdev@gmail.com</span>

              <a
                href="mailto:azacdev@gmail.com.com"
                className={`${
                  theme ? "text-color-light" : "text-color-dark"
                } contact__button`}
              >
                Write me
                <AiOutlineArrowRight className="contact__button-icon" />
              </a>
            </div>

            <div
              className={`${
                theme ? "button-light" : "button-dark"
              } contact__card`}
            >
              <FaFacebookMessenger className="contact__card-icon" />

              <h3 className="contact__card-title">Messenger</h3>

              <a
                href="https://m.me/abdulrazak.abubakar.7374480"
                className={`${
                  theme ? "text-color-light" : "text-color-dark"
                } contact__button`}
              >
                Write me
                <AiOutlineArrowRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className={`${
                  theme ? "button-light" : "button-dark"
                } button button--flex`}>
              Send Message
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
