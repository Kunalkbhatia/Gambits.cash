import type { Metadata } from "next";
import { Geist, Geist_Mono, Lilita_One } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "King.bet",
  description:
    "King.bet: Play competitive chess and place bets to win big in a thrilling strategic showdown!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lilitaOne.variable} antialiased`}
      >
        <div className="flex bg-[url(https://assets-themes.chess.com/image/drtgi/background.jpg)] bg-cover bg-fixed bg-center">
          <SideBar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
