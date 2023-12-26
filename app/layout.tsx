import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const yekan = localFont({
  src: "../lib/fonts/Yekan Bakh Fa 06 Bold.woff",
  weight: "800",
  variable: "--font-yekan-hairline",
});

export const metadata: Metadata = {
  title: "drdr",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden w-full h-full ${yekan.className}`}>
        <main className="flex flex-col overflow-x-hidden">
          <div className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
            <Header />
          </div>

          <div className="mt-[40px] lg:mt-[110px] overflow-x-hidden">
            {children}
          </div>
        </main>
        <footer>
          {/* footer  */}
          <Footer />
        </footer>
      </body>
    </html>
  );
}
