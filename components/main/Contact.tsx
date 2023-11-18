import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ContactForm from "@components/sub/ContactForm";

const Contact = () => {
  return (
    <section className="max-container section z-20" id="contact">
      <h2 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">Contact Me</h2>

      <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-6 lg:gap-x-24 pb-12">
        <div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <div className="flex flex-col justify-center items-center gap-2 text-xl py-5 px-8 mt-4 button-primary text-white cursor-pointer rounded-xl w-[300px] group">
              <MdEmail className="text-[2rem] mb-1" />

              <h3 className="contact__card-title text-sm font-medium">Email</h3>
              <span className="contact__card-data block mb-3 text-sm">azacdev@gmail.com</span>

              <a
                href="mailto:azacdev@gmail.com.com"
                className="text-sm inline-flex items-center justify-center gap-x-1"
              >
                Write me
                <AiOutlineArrowRight className="text-base duration-200 transition-transform
                 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-xl py-5 px-8 mt-4 button-primary text-white cursor-pointer rounded-xl w-[300px] group">
              <FaFacebookMessenger className="text-[2rem] mb-1" />

              <h3 className="text-sm font-medium">Messenger</h3>

              <a
                href="https://m.me/abdulrazak.abubakar.7374480"
                className="text-sm inline-flex items-center justify-center gap-x-1"
              >
                Write me
                <AiOutlineArrowRight className="text-base duration-200 transition-transform
                 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title text-[2rem] text-center font-medium mb-6 text-white">Get in Touch</h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
