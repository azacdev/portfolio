import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mint" });

export const metadata: Metadata = {
  title: "Azacdev",
  description: "Software Developer, Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <Toaster theme="dark" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
