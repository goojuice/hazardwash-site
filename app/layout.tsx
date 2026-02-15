import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HazardWash - Pressure Washing for Brisbane Seniors | CHSP Approved",
  description: "Professional pressure washing services for elderly residents in Brisbane. Prevent slips, maintain independence. Fully insured, police checked, CHSP approved provider.",
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