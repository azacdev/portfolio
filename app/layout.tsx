import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import "@/styles/globals.css";
import { auth } from "@/auth";
import { ThemeProvider } from "@/hooks/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mint" });

export const metadata: Metadata = {
  // @ts-ignore
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Abdulrazak Abubakar (Azacdev) Full Stack Web & Mobile Developer",
    template:
      "%s - Abdulrazak Abubakar (Azacdev) Full Stack Web & Mobile Developer",
  },
  description:
    "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
  keywords: [
    "web dev",
    "fullstack developer",
    "frontend developer",
    "backend developer",
    "web developer nigeria",
    "azacdev",
    "abdulrazak abubakar",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Azacdev",
    images: "./opengraph-image.webp",
    description:
      "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
    creator: "azacdev",
  },
  openGraph: {
    type: "website",
    url: "https://www.azacdev.com",
    locale: "en_US",
    title: "Azacdev",
    images: "./opengraph-image.webp",
    description:
      "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
    siteName: "Azacdev",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <SessionProvider session={session}>
          <ThemeProvider attribute="class">
            <Toaster />
            <Navbar />
            <Providers>{children}</Providers>
            <Footer />
            <SpeedInsights />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
