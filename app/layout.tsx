import "./globals.css";

import type { Metadata } from "next";
import { lato } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Sam's personal site",
  description: "A personal website for Sam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
