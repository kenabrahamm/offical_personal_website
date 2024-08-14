import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"

import { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: "Ken Abraham",
  description: "Personal website of Ken Abraham",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        <body className={inter.className}>
          {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
            <div className="max-w-3xl mx-auto px-4 flex flex-col min-h-screen">
              <Navbar />
              
              <main className="flex-grow py-8">
                {children}
              </main>
            </div>
          {/* </ThemeProvider> */}
        </body>
        </head>
      </html>
      </>
  )
}