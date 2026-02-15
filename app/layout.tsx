import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HazardWash - Safe Pathways for Brisbane Seniors",
  description: "Professional pressure washing services for elderly residents in Brisbane. CHSP approved, fully insured.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}