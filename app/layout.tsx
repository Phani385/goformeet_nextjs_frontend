import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const arimo = Arimo({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Goformeet",
  description: "Book and #Goformeet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", arimo.variable)}>
        {children}
      </body>
    </html>
  );
}
