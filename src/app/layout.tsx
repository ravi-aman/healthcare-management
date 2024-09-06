import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="flex min-h-screen bg-white">
            <div >
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>

  );
}
