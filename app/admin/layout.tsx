import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";

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
      <body
        className={cn(
          "font-sans antialiased min-h-screen flex",
          arimo.variable
        )}
      >
        <Sidebar />
        <section className="gap-10 flex flex-col flex-1">
          <Navbar />
          <div className="bg-[#f2edf3] flex-1">{children}</div>
        </section>
      </body>
    </html>
  );
}
