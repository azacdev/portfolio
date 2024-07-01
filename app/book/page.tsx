"use client";

import MainLayout from "@/components/main-layout";
import { InlineWidget } from "react-calendly";
import GradualSpacing from "@/components/ui/gradual-spacing";

const BookPage = () => {
  return (
    <main className="flex flex-col w-full items-center justify-center dark:text-light lg:pt-12">
      <MainLayout className="py-16">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16 "
          text="Book a meeting"
        />

        <InlineWidget url="https://calendly.com/azacdev/book-your-tech-chat" />
      </MainLayout>
    </main>
  );
};

export default BookPage;
