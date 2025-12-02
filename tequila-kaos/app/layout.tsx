import type { Metadata } from "next";
import { Bebas_Neue, Urbanist } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Tequila Kaos",
  description: "Tequila Kaos",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bebasNeue.variable} ${urbanist.variable} antialiased bg-dark-black text-beige-agave`}
      >
        {children}
      </body>
    </html>
  );
}
