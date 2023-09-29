import "./globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/Header/index";
import { Footer } from "@/components/Footer/index";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Street Fashion",
  description: "Best online shop with street wear clothes for everone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = `app-wrapper`;

  return (
    <html lang="en">
      <body className={classes}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
