import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HK-Decord | Thiết Kế Nội Thất & Kiến Trúc",
    template: "%s | HK-Decord",
  },
  description:
    "HK-Decord - Công ty thiết kế nội thất và kiến trúc nhà hàng đầu Việt Nam. Chúng tôi biến không gian sống của bạn thành tác phẩm nghệ thuật.",
  keywords: [
    "thiết kế nội thất",
    "kiến trúc nhà",
    "HK-Decord",
    "thiết kế bản vẽ",
    "interior design Vietnam",
  ],
  openGraph: {
    title: "HK-Decord | Thiết Kế Nội Thất & Kiến Trúc",
    description: "Biến không gian sống của bạn thành tác phẩm nghệ thuật",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
