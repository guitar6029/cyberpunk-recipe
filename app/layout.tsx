import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer/Footer";

const getOrbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hacks",
  description: "get hackin'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${getOrbitron.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
