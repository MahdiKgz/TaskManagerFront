import "./globals.css";
import Header from "@/src/modules/layout/Header";
import Footer from "@/src/modules/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-dvw h-dvh">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
