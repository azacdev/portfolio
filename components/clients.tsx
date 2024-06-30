"use client";

import React from "react";

import { companies, testimonials } from "@/config/data";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import MainLayout from "@/components/main-layout";
import GradualSpacing from "@/components/ui/gradual-spacing";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12 text-black"
    >
      <MainLayout className="pt-16">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16"
          text="Kind words from satisfied clients"
        />
        <div className="flex flex-col items-center">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex gap-2">
                  <img
                    src={company.img}
                    alt={company.name}
                    className={`${
                      (company.id === 2 || company.id === 5) && "w-24 md:w-28"
                    } w-10 md:w-14 h-14 object-contain`}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default Clients;
