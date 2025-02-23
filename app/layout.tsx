import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Youssef Jemmane - Portfolio",
  description:
    "Explore the portfolio of Youssef Jemmane, a junior developer with experience in fullstack development, showcasing projects, skills, and experiences.",
  keywords: [
    "Youssef Jemmane",
    "Portfolio",
    "Fullstack Developer",
    "Web Development",
    "Software Engineering",
    "React",
    "Next.js",
    "Laravel",
  ],
  authors: [{ name: "Youssef Jemmane" }],
  creator: "Youssef Jemmane",
  publisher: "Youssef Jemmane",
  openGraph: {
    title: "Youssef Jemmane - Portfolio",
    description:
      "Explore the portfolio of Youssef Jemmane, a junior developer with experience in fullstack development, showcasing projects, skills, and experiences.",
    url: "https://jemmane.vercel.app",
    siteName: "Youssef Jemmane Portfolio",
    images: [
      {
        url: "https://jemmane.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp.1cb021f0.jpg&w=640&q=75",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Jemmane - Portfolio",
    description:
      "Explore the portfolio of Youssef Jemmane, a junior developer with experience in fullstack development, showcasing projects, skills, and experiences.",
    images: [
      "https://jemmane.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp.1cb021f0.jpg&w=640&q=75",
    ],
    creator: "@YoussefJemmane",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
