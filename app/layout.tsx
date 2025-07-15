import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="w-screen h-screen bg-base-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
