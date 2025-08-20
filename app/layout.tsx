import type { Metadata } from "next";
//import { Sriracha } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

//const sriracha = Sriracha({
//  subsets: ["latin"],
//  weight: "400",
//},
//);

const dSThunderTester = localFont({
  src: "./fonts/dSThunderTester.ttf",
})

export const metadata: Metadata = {
  title: "DTI-SAU wow wow wow",
  description: "เว็ปขายกาแฟออนไลน์ ส่งทุกที่ทุกเวลา 24  ชั่วโมง",
  keywords: ["DTI", "SAU", "ออนไลน์", "กาแฟ", "เว็ป", "ส่งทุกที่ทุกเวลา", "24", "ชั่วโมง"],
  icons: [{
    url: "next.svg",
    type: "image/svg+xml"
  },
  ],
  authors: [
    {
      name: "BAS",
      url: "https://www.sautechnology.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={sriracha.className}
        className={dSThunderTester.className}
      >
        {children}
      </body>
    </html>
  );
}
