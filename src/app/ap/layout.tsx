import Header from "@components/ap-header";
import Footer from "@components/ap-footer";

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
