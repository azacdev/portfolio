"use client";

import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { FormEvent, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleUserInput = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: React.ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "service_6b4dv29",
        "template_l30c3gd",
        form.current,
        "cJuH2_nxQgwnvDytr"
      );
    }
    (e.target as HTMLFormElement).reset();
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
    notify();

    // Delay the reset of userInput for 2s
    setTimeout(() => {
      setUserInput({
        name: "",
        email: "",
        text: "",
      });
    }, 2000);
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className=" w-full md:w-[360px] text-white">
        <div className="contact__form-div relative h-16 mb-8">
          <label className="bg-[#030014] absolute top-[-1.5rem] left-5 text-sm p-[0.875rem] z-[25]">Name</label>
          <input
            type="text"
            name="name"
            required
            value={userInput.name}
            onChange={handleUserInput}
            className="absolute top-0 left-0 right-0 w-full h-full outline-none bg-[#030014] text-white rounded-xl border p-6"
            placeholder="Insert your name"
          />
        </div>

        <div className="contact__form-div relative h-16 mb-8">
          <label className="bg-[#030014]  absolute top-[-1.5rem] left-5 text-sm p-[0.875rem] z-[25]">Mail</label>
          <input
            type="email"
            name="email"
            required
            value={userInput.email}
            onChange={handleUserInput}
            className="absolute top-0 left-0 right-0 w-full h-full outline-none bg-[#030014] text-white rounded-xl border p-6"
            placeholder="Insert your email"
          />
        </div>

        <div className="contact__form-div contact__form-area relative h-[11rem] mb-8">
          <label className="bg-[#030014] absolute top-[-1.6rem] left-5 text-base p-[0.875rem] z-[35]">Text</label>
          <textarea
            name="text"
            cols={30}
            rows={10}
            required
            value={userInput.text}
            onChange={handleUserInput}
            className="absolute top-0 left-0 right-0 w-full h-full bg-[#030014] text-white outline-none rounded-xl border p-6 resize-none"
            placeholder="Write your message"
          ></textarea>
        </div>

        <button className="flex flex-row items-center text-xl py-4 px-8 mt-4 button-primary text-white cursor-pointer rounded-xl max-w-[230px]" onClick={handleBtn} disabled={disableSubmit}>
          Send Message
          <FiSend className="ml-2 text-2xl" />
        </button>
      </form>

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
    </>
  );
};

export default ContactForm;
