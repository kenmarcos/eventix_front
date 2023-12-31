import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import "./globals.css";
import ContextsProvider from "context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        <div className="min-h-screen flex flex-col">
          <ContextsProvider>
            <Header />

            <div className="flex flex-1 2xl:container 2xl:mx-auto">
              <Sidebar />
              <main className="flex-1">{children}</main>
            </div>

            <Footer />
          </ContextsProvider>
        </div>
      </body>
    </html>
  );
}
