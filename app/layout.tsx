import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "@styles/globals.css";
import StarCanvas from "@components/main/StarBackground";
import Navbar from "@components/main/Navbar";
import Footer from "@components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azacdev",
  description: "Azacdev Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-auto overflow-x-hidden`}
      >
        <StarCanvas/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
