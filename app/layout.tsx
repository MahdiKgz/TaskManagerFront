import "./globals.css";
import Header from "@/src/modules/layout/Header";
import Footer from "@/src/modules/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="w-screen h-screen bg-zinc-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
