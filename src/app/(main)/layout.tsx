import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon.com",
  description:
    "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
};

import Footer from "@components/footer";
import Header from "@components/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-[#e3e6e6]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
