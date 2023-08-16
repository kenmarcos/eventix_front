import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Eventix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body className={`${poppins.className} bg-gray-extraLight`}>
        <Header />

        <div className="flex 2xl:container 2xl:mx-auto">
          <Aside />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
