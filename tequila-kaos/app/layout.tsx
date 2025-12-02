import type { Metadata } from "next";
import { Bebas_Neue, Urbanist } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAOS Tequila",
  description: "Licor de Tequila sabor canela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bebasNeue.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
