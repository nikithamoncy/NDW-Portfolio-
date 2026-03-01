import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikitha Moncy | Digital Wave",
  description: "I build high-converting websites and intelligent AI agents for fitness businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-white text-slate-800`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
