import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trnava-vuc.sk"),
  title: "Presmerovanie | Trnavský samosprávny kraj",
  description: "Presmerovanie na oficiálnu webovú stránku Trnavského samosprávneho kraja.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Presmerovanie | Trnavský samosprávny kraj",
    description: "Presmerovanie na oficiálnu webovú stránku Trnavského samosprávneho kraja.",
    url: "https://trnava-vuc.sk",
    siteName: "Trnavský samosprávny kraj",
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
