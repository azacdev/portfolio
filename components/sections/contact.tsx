import { ArrowRight, Facebook, Mail } from "lucide-react";

import MainLayout from "@/components/main-layout";
import ContactForm from "@/components/forms/contact-form";
import GradualSpacing from "@/components/ui/gradual-spacing";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12"
    >
      <MainLayout className="pt-16">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-light md:text-7xl md:leading-[5rem] mb-8 mb:mb-16 "
          text="Contact Me!"
        />
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-6 lg:gap-x-18 pb-12">
          <div className="flex flex-col text-center items-center gap-y-4">
            <div className="col-span-8 sm:col-span-4 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light p-8 border-dark dark:border-light dark:bg-dark order-1 sm:order-none flex flex-col justify-center items-center gap-2 text-xl py-5 px-8 mt-4 cursor-pointer group w-[300px] transition-all duration-300">
              <div className="absolute top-3 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
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
                <ArrowRight className="text-base duration-200 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="col-span-8 sm:col-span-4 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light p-8 border-dark dark:border-light dark:bg-dark order-1 sm:order-none flex flex-col justify-center items-center gap-2 text-xl py-5 px-8 mt-4 cursor-pointer group w-[300px] transition-all duration-300">
              <div className="absolute top-3 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Facebook className="text-[2rem] mb-1" />

              <h3 className="text-sm font-medium">Messenger</h3>

              <a
                href="https://m.me/abdulrazak.abubakar.7374480"
                className="text-sm inline-flex items-center justify-center gap-x-1"
              >
                Write me
                <ArrowRight className="text-base duration-200 transition-transform group-hover:translate-x-1" />
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
    </section>
  );
};

export default Contact;
