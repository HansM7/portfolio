import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hans Portfolio",
  description: "Hans Portfolio with Next 🚀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
