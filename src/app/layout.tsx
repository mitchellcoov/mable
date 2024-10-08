import type { Metadata } from "next";

import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import {Englebert} from "next/font/google"

import Link from "next/link";
import Image from "next/image";
import "./globals.css";


const englebert: NextFontWithVariable = Englebert({
  weight: ['400'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: "--font-englebert"
});


export const metadata: Metadata = {
  title: "Mable Coovert",
  description: "Mable Coovert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${englebert.variable} antialiased flex flex-col h-screen justify-between`}>
                <header className="header text-mabledarkpink">
                    

                </header>

                <main className="grow">{children}</main>

                <footer className="grid grid-cols-footer bottom-2 mt-auto text-mabledarkpink">
                    <p className="col-span-1 col-start-1 pl-20 pb-2">
                        Site created by <a className="text-mabledarkorange" href="http://mitchell.localhost:3001">Mitchell Coovert</a>
                    </p>

                    <p className="p-6 mt-8">&copy; 2024 Mable Coovert. All rights reserved.</p>
                    

                    <div className="col-span-1 col-start-3">
                        
                    </div>
                    

                </footer>
            </body>
    </html>
  );
}
