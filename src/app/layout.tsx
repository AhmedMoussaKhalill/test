import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { Toaster } from "react-hot-toast";

const kalam = Kalam({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Flashvert - Limitless File Conversion Freedom",
  description:
    "Unlock your creativity with Flashvert—the fastest online tool for free multimedia conversion. Transform images, audio, and videos effortlessly. No restrictions, just pure creative freedom. Start converting now and elevate your content like never before!",
  creator: "AHMED MOUSSA",
  keywords:
    "image converter, video converter, audio converter, unlimited audio conversion, unlimited image converter, unlimited video converter, fast image conversion, fast audio conversion, fast video conversion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kalam.className}>
        <NavBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
