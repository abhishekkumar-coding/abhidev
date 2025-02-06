import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const font = Sora({
  weight : ["100", "200", "300", "400", "500", "600", "700", "800",],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Abhi Dev",
  description: "Created by Abhishek Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${font.className} scroll-smooth bg-[#0F0715] overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
