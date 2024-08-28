import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./globals.css";
import { ThemeProvider } from "./provider";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll.smooth"
    lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/flower.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <SmoothScroll>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
