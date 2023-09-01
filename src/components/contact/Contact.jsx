import { useRef, useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { ThemeContext } from "../themeContext/ThemeProvider";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const form = useRef();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    text: "",
  });

  console.log(userInput.text);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

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

  const disableSubmit =
    userInput.name.length === 0 ||
    userInput.email.length === 0 ||
    userInput.text.length === 0;

  const notify = () =>
    toast.success("Email Sent!", {
      theme: "light",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleBtn = () => {
    // Notify after clearing
    notify();
    
    const handleBtn = () => {
      // Clear user input fields
      setUserInput({
        name: "",
        email: "",
        text: "",
      });
    };
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
                className={` contact__button`}
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
                className={` contact__button`}
              >
                Write me
                <AiOutlineArrowRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Get in Touch</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label
                className={`${
                  theme ? "contact__form-tag-light" : "contact__form-tag-dark"
                } contact__form-tag`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={userInput.name}
                onChange={handleUserInput}
                className={`${
                  theme ? "text-color-light" : "text-color-dark"
                } contact__form-input`}
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label
                className={`${
                  theme ? "contact__form-tag-light" : "contact__form-tag-dark"
                } contact__form-tag`}
              >
                Mail
              </label>
              <input
                type="email"
                name="email"
                required
                value={userInput.email}
                onChange={handleUserInput}
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label
                className={`${
                  theme ? "contact__form-tag-light" : "contact__form-tag-dark"
                } contact__form-tag`}
              >
                Text
              </label>
              <textarea
                name="text"
                cols="30"
                rows="10"
                required
                value={userInput.text}
                onChange={handleUserInput}
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              className={`${
                theme ? "button-light" : "button-dark"
              } button button--flex`}
              onClick={handleBtn}
              disabled={disableSubmit}
            >
              Send Message
              <FiSend className="button__icon" />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        theme="light"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
