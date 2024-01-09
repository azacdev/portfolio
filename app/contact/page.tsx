import type { Metadata } from "next";
import { ArrowRight, Facebook, Mail } from "lucide-react";

import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import ContactForm from "./components/contact-form";
import TransitionEffect from "@/components/animation/transition";

export const metadata: Metadata = {
  title: "Azacdev | Contact Page",
  description: "Software Developer, Web Developer",
};

const ContactPage = () => {
  return (
    <>
    <TransitionEffect />
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12">
      <MainLayout className="pt-28 lg:pt-16">
        <AnimatedText title="Contact Me!" className="mb-16 dark:text-light !text-4xl sm:!text-6xl lg:!text-7xl" />
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-6 lg:gap-x-18 pb-12">
          <div className="flex flex-col text-center items-center gap-y-4">
            <div className="flex flex-col justify-center items-center gap-2 text-xl py-5 px-8 mt-4 button-primary text-light bg-dark cursor-pointer rounded-xl w-[300px] group  hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-dark dark:hover:text-light transition-all duration-300 border">
              <Mail className="text-[2rem] mb-1" />

              <h3 className="contact__card-title text-sm font-medium">Email</h3>
              <span className="contact__card-data block mb-3 text-sm">
                azacdev@gmail.com
              </span>

              <a
                href="mailto:azacdev@gmail.com.com"
                className="text-sm inline-flex items-center justify-center gap-x-1"
              >
                Write me
                <ArrowRight
                  className="text-base duration-200 transition-transform
                 group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-xl py-5 px-8 mt-4 button-primary text-light bg-dark cursor-pointer rounded-xl w-[300px] group  hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-dark dark:hover:text-light transition-all duration-300 border">
              <Facebook className="text-[2rem] mb-1" />

              <h3 className="text-sm font-medium">Messenger</h3>

              <a
                href="https://m.me/abdulrazak.abubakar.7374480"
                className="text-sm inline-flex items-center justify-center gap-x-1"
              >
                Write me
                <ArrowRight
                  className="text-base duration-200 transition-transform
                 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[2rem] text-center font-medium mb-6 text-dark dark:text-light">
              Get in Touch
            </h3>
            <ContactForm />
          </div>
        </div>
      </MainLayout>
    </main>
    </>
  );
};

export default ContactPage;
