import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranithan Thamcharoenporn",
  description: "Pranithan's profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Menu/>
        <div className="m-4 max-w-screen-lg m-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
