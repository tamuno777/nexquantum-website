import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/sharedLayout/header";
import { Inter } from "next/font/google";
import Footer from "./components/sharedLayout/footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ODD Network - Innovative Technology Solutions',
  description: 'Welcome to ODD Network, your go-to platform for innovative technology solutions.',
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
       
          <Header
            navLinks={[
              { label: "Home", href: "/" },
              { label: "About", href: "/aboutUs" },
              { label: "Service", href: "/services" },
              { label: "Contact", href: "/contact" },
            ]}
          />

          {/* Page Content */}
          <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
