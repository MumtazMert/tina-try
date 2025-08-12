import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overreacted - Personal blog by Dan Abramov",
  description: "Personal blog by Dan Abramov. I explain with words and code.",
  keywords: ["react", "javascript", "programming", "web development"],
  authors: [{ name: "Dan Abramov" }],
  openGraph: {
    title: "Overreacted - Personal blog by Dan Abramov",
    description: "Personal blog by Dan Abramov. I explain with words and code.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
