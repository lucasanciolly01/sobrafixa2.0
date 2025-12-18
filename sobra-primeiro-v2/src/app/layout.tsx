import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sobra Primeiro",
  description: "O app que separa a sobra automaticamente antes de você gastar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full bg-gray-50 text-gray-900 selection:bg-purple-100 selection:text-purple-900">
        {children}
      </body>
    </html>
  );
}
