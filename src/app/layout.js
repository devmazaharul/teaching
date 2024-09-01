import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Tophead from "@/components/Tophead";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Font = Space_Grotesk({
  subsets: ["vietnamese"],
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Teaching",
  description: "Generated by mazaharul islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Font.className} `}>
        <Tophead />
        <div className="w-[85%] mx-auto">
          <Header />
        </div>

        <Hero />
        <div className="w-[85%] mx-auto py-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
