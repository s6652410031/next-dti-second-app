import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const Churros = localfont({
  src: "././fonts/Churros-PersonalOnly.ttf",
});

export const metadata: Metadata = {
  title: "SAU-Coffee Cafe",
  description: "ร้านกาแฟ SAU-Coffee",
  keywords: [
    "SAU-Coffee",
    "ร้านกาแฟ",
    "กาแฟ",
    "คาเฟ่",
    "SAU",
    "SAU-Coffee Cafe",
  ],
  authors: [
    {
      name: "SAU-Coffee",
      url: "https://wwww.sautechnology.com",
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
        className={ Churros.className }
      >
        {children}
      </body>
    );
  </html>
  );
}
