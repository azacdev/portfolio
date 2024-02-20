"use client";

import MainLayout from "@/components/main-layout";
import AnimatedText from "@/components/animation/animated-text";
import TransitionEffect from "@/components/animation/transition";
import { InlineWidget } from "react-calendly";

const BookPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center dark:text-light lg:pt-12">
        <MainLayout className="py-16">
          <AnimatedText
            title="Book a meeting"
            className="mb-8 mb:mb-16 dark:text-light !text-4xl sm:!text-6xl md:!text-7xl"
          />

          <InlineWidget url="https://calendly.com/azacdev/book-your-tech-chat" />
        </MainLayout>
      </main>
    </>
  );
};

export default BookPage;
